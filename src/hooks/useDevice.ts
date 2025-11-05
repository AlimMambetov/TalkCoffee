'use client'
import { useState, useEffect, useMemo, useRef } from 'react';

// Типы для устройств
export type DeviceType = 'desktop' | 'laptop' | 'tablet' | 'phone';
export type OrientationType = 'portrait' | 'landscape';

// Интерфейс для возвращаемого объекта
export interface DeviceInfo {
	// Основные типы устройств
	deviceType: DeviceType;
	isPhone: boolean;
	isTablet: boolean;
	isLaptop: boolean;
	isDesktop: boolean;

	// Размеры экрана
	width: number;
	height: number;
	aspectRatio: number;

	// Ориентация
	orientation: OrientationType;
	isPortrait: boolean;
	isLandscape: boolean;

	// Состояние
	isInitialized: boolean;
}

// Интерфейс для опций
export interface UseDeviceOptions {
	breakpoints?: {
		phone?: number;   // < 768px
		tablet?: number;  // 768px - 1023px  
		laptop?: number;  // 1024px - 1439px
		desktop?: number; // ≥ 1440px
	};
	throttleDelay?: number;
}

// Стандартные брейкпоинты
const defaultBreakpoints = {
	phone: 768,
	tablet: 1024,
	laptop: 1440,
};

// Throttle функция
const throttle = <T extends (...args: any[]) => any>(
	func: T,
	delay: number
): ((...args: Parameters<T>) => void) => {
	let lastCall = 0;
	let timeoutId: NodeJS.Timeout | null = null;

	return (...args: Parameters<T>) => {
		const now = Date.now();

		if (now - lastCall >= delay) {
			lastCall = now;
			func.apply(null, args);
		} else {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
			timeoutId = setTimeout(() => {
				lastCall = Date.now();
				func.apply(null, args);
			}, delay - (now - lastCall));
		}
	};
};

// Определение типа устройства с явными диапазонами
const getDeviceType = (width: number, breakpoints: typeof defaultBreakpoints): DeviceType => {
	if (width < breakpoints.phone) return 'phone';
	if (width >= breakpoints.phone && width < breakpoints.tablet) return 'tablet';
	if (width >= breakpoints.tablet && width < breakpoints.laptop) return 'laptop';
	return 'desktop';
};

// Определение ориентации
const getOrientation = (width: number, height: number): OrientationType => {
	return width > height ? 'landscape' : 'portrait';
};

export const useDevice = (options: UseDeviceOptions = {}): DeviceInfo | null => {
	const {
		breakpoints: customBreakpoints = {},
		throttleDelay = 200
	} = options;

	const breakpoints = useMemo(() => ({
		...defaultBreakpoints,
		...customBreakpoints,
	}), [JSON.stringify(customBreakpoints)]);

	const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
	const initializedRef = useRef(false);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		// Защита от повторной инициализации в Strict Mode
		if (initializedRef.current) {
			return;
		}
		initializedRef.current = true;

		const updateDeviceInfo = () => {
			try {
				const width = window.innerWidth;
				const height = window.innerHeight;

				const deviceType = getDeviceType(width, breakpoints);
				const orientation = getOrientation(width, height);
				const aspectRatio = width > 0 && height > 0 ? width / height : 0;

				setDeviceInfo({
					deviceType,
					isPhone: deviceType === 'phone',
					isTablet: deviceType === 'tablet',
					isLaptop: deviceType === 'laptop',
					isDesktop: deviceType === 'desktop',
					width,
					height,
					aspectRatio,
					orientation,
					isPortrait: orientation === 'portrait',
					isLandscape: orientation === 'landscape',
					isInitialized: true,
				});
			} catch (error) {
				console.warn('useDevice: Error getting window dimensions', error);
			}
		};

		const throttledUpdate = throttle(updateDeviceInfo, throttleDelay);

		// Инициализируем сразу
		updateDeviceInfo();

		window.addEventListener('resize', throttledUpdate);
		window.addEventListener('orientationchange', throttledUpdate);

		return () => {
			window.removeEventListener('resize', throttledUpdate);
			window.removeEventListener('orientationchange', throttledUpdate);
		};
	}, [breakpoints, throttleDelay]);

	return deviceInfo;
};

// Обновленные специализированные хуки
export const useDeviceType = (options?: UseDeviceOptions): DeviceType | null => {
	const device = useDevice(options);
	return device?.deviceType ?? null;
};

export const useWindowSize = (options?: UseDeviceOptions): { width: number; height: number } | null => {
	const device = useDevice(options);
	return device ? { width: device.width, height: device.height } : null;
};

export const useOrientation = (options?: UseDeviceOptions): OrientationType | null => {
	const device = useDevice(options);
	return device?.orientation ?? null;
};

export const useAspectRatio = (options?: UseDeviceOptions): number | null => {
	const device = useDevice(options);
	return device?.aspectRatio ?? null;
};

export const useIsMobile = (options?: UseDeviceOptions): boolean | null => {
	const device = useDevice(options);
	return device ? (device.isPhone || device.isTablet) : null;
};

export const useIsTouchDevice = (options?: UseDeviceOptions): boolean | null => {
	const device = useDevice(options);
	return device ? (device.isPhone || device.isTablet) : null;
};