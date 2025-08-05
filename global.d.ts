export {};

declare global {
    interface Window {
        DG: Promise<any>; // Можешь заменить `any` на более точный тип, если есть
    }
}
