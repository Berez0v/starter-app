/**
 * Класс Одиночка предоставляет метод getInstance, который позволяет клиентам
 * получить доступ к уникальному экземпляру одиночки.
 */
class Singleton {
    private static instance: Singleton;
    private visitCount: number;

    /**
     * Конструктор Одиночки всегда должен быть скрытым, чтобы предотвратить
     * создание объекта через оператор new.
     */
    private constructor() {
        this.visitCount = 0;
    }

    public static get(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public visitPage(): void {
        this.visitCount++;
    }

    /**
     * Публичный метод
     */
    public getVisitCount(): number {
        return this.visitCount;
    }
}
export default Singleton;
/**
 * Клиентский код.
 */
// function clientCode() {
//     const singleton = Singleton.getInstance();

//     singleton.visitPage();
//     singleton.visitPage();
//     singleton.visitPage();

//     console.log(`Total visits: ${singleton.getVisitCount()}`);
// }

// clientCode();
