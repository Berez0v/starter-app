class Singleton {
    private static instance: Singleton;
    private visitCount: number;

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

    public getVisitCount(): number {
        return this.visitCount;
    }
}
export default Singleton;

