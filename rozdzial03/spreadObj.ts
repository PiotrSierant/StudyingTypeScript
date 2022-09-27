namespace NamespaceA {
    class A {
        aname: string = 'A';
    }
    class B {
        bname: string = 'B';
    }

    const a = new A();
    const b = new B();
    const c = { ...a, ...b } // nowy obiekt
    const d = Object.assign(a, b); // rozszerzenie obiektu a o obiekt b
    console.log(c);
    console.log(d);

    a.aname = 'a1';
    console.log(c);
    console.log(d);
}
