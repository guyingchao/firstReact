class EventEmitter{
    constructor(){
        this._eventpool = {}
    }
    on(event,fn){
        this._eventpool[event]?this._eventpool[event].push(fn):this._eventpool[event] = [fn]
    }
    emit(event, ...data){
        this._eventpool[event]&&this._eventpool[event].forEach(element => {
            element(...data)
        });
    }
    off(event,fn){
        if(fn){
            this._eventpool[event].splice(this._eventpool[event].indexOf(fn),1)
        }
        if(!fn){
            this._eventpool[event] = []
        }
    }
    once(event,fn){
        let self = this
        let fired = false
        function magic(){
            self.off(event,magic)
            if(!fired){
                fired = true
                fn.apply(this,arguments)
            }
        }
        this.on(event, magic)
    }
}

export default new EventEmitter();