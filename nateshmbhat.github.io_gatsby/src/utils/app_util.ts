
class AppMathUtil{
    static degreeToRadian(degree:number) : number {
        return degree * Math.PI/180
    }

    static radianToDegree(radian:number) {
        return radian * 180/Math.PI
    }

    static getOffsetFromAngle(degree : number, maxLength : number) : {x:number,y:number}{
        let rads = this.degreeToRadian(degree)
        return {
            x : Math.cos(rads) * maxLength  , 
            y : Math.sin(rads) * maxLength
        }
    }
}

export {AppMathUtil} 