function totalLength(x: string, y:string): number
function totalLength(x: any[], y:any[]): number
function totalLength(x: (any[] | string), y: (string | any[])): number {

    let total: number = x.length + y.length;

    x.slice(0);

    if (x instanceof Array) {

        x.push("abc");

    }


    if (typeof x === "string")
    {

        x.substr(1);

    }

    return total;

}