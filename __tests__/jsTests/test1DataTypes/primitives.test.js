/**
 * Tipuri primitive de date in limbajul de programare JS:
 * number
 * string
 * boolean
 * BigInt
 * undefined
 * Symbol
 * null //primitiva speciala
 *
 * Tipuri de date structurale in JS:
 * Object
 * Function
 *
 *
 */

describe('Testam tipurile de date in limbajul de programare JS', () => {
 
 test ("abc", ()=>{
  const sum =(a,b)=>{
    const c=a+b
    return c
  }
   const d=sum(20,12)
  
  console.log(d) 
  expect(1).toBe(1)

 })
 
 
 
 
 
 
 
 
 
 
  test('Testam tipurile de date primitive', () => {
    /**
     * Tipul de date primitiv: number
     * 8 bytes (8*8 bits -> 64 bits)
     */
    expect(typeof 900).toBe('number')
    expect(typeof -1900).toBe('number')

    /**
     * Tipul de date primitiv: string
     */
    expect(typeof 'hello world').toBe('string')
    expect(typeof '9000').toBe('string')
    expect(typeof `Hello`).toBe('string')
    expect(typeof `Hello ${900}`).toBe('string')

    /**
     * Tipul de date primitiv boolean
     */
    expect(typeof true).toBe('boolean')
    expect(typeof false).toBe('boolean')
    expect(typeof (900 > 200)).toBe('boolean')
    expect(typeof (100 > 200000)).toBe('boolean')

    /**
     * Tipul de date primitiv BigInt
     * Principiul de functionare: utilizeaza siruri de caractere si poate avea marime nelimitata
     *
     *
     */
    const bigInt1 = BigInt(
      '1999999999999999999999999999999999999999999999999999919999999999999999999999999999999999999999999999999999199999999999999999999999999999999999999999999999999991999999999999999999999999999999999999999999999999999919999999999999999999999999999999999999999999999999999199999999999999999999999999999999999999999999999999991999999999999999999999999999999999999999999999999999919999999999999999999999999999999999999999999999999999199999999999999999999999999999999999999999999999999991999999999999999999999999999999999999999999999999999919999999999999999999999999999999999999999999999999999199999999999999999999999999999999999999999999999999991999999999999999999999999999999999999999999999999999919999999999999999999999999999999999999999999999999999199999999999999999999999999999999999999999999999999991999999999999999999999999999999999999999999999999999919999999999999999999999999999999999999999999999999999199999999999999999999999999999999999999999999999999990000',
    )
    const bigInt2 = BigInt(7)
    const res = bigInt1 + bigInt2

    expect(res).toBe(
      BigInt(
        '1999999999999999999999999999999999999999999999999999919999999999999999999999999999999999999999999999999999199999999999999999999999999999999999999999999999999991999999999999999999999999999999999999999999999999999919999999999999999999999999999999999999999999999999999199999999999999999999999999999999999999999999999999991999999999999999999999999999999999999999999999999999919999999999999999999999999999999999999999999999999999199999999999999999999999999999999999999999999999999991999999999999999999999999999999999999999999999999999919999999999999999999999999999999999999999999999999999199999999999999999999999999999999999999999999999999991999999999999999999999999999999999999999999999999999919999999999999999999999999999999999999999999999999999199999999999999999999999999999999999999999999999999991999999999999999999999999999999999999999999999999999919999999999999999999999999999999999999999999999999999199999999999999999999999999999999999999999999999999990007',
      ),
    )

    /**
     * Tipul de date primitiv: undefined
     * De obicei se atribuie la variabile ce nu au fost initializate
     * Se returneaza ByDefault de functiile ce nu returneaza nimic
     */
    let z

    expect(z).toBeUndefined()
    expect(z).toBe(undefined)

    z = 22

    expect(z).not.toBe(undefined)

    /**
     * Tipul de date primitiv: Symbol
     * se utilizeaza pentru a rezolva problema coliziilor de nume la JS obiecte
     */

    //metoda Symbol returneaza mereu id nou si unical
    const s1 = Symbol('hello')
    const s2 = Symbol('hello')
    expect(s1).not.toBe(s2)

    //metoda Symbol.for returneaza id-ul existent daca el exista
    const ss1 = Symbol.for('hello1')
    const ss2 = Symbol.for('hello1')
    expect(ss1).toBe(ss2)

    //exemplu de obiect cu cimpuri-chei de tip Symbol
    const a = {
      [s1]: 111, //simbol
      [ss1]: 222, //simbol
      ['exemplu_de_cimp_ce_NU_este_simbol']: 900, //NU simbol
      exemplu_de_alt_cimp_ce_NU_este_simbol: 333, //NU simbol
    }

    /**
     * Tipul de date primitiv: null
     */
    const simbols = Object.getOwnPropertySymbols(a) //extragem cimpurile symbol
    expect(simbols).toEqual([s1, ss1])

    const zzz = null
    const zzz1 = null

    expect(zzz).toBe(zzz1)
  })
})
