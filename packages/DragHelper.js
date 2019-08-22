function DragHelper() {
    var store = {};
    this.set = function (name, dragWarper) {
        store[name] = dragWarper;
    };

    this.get = function (name) {
        return store[name];
    };

    this.remove = function (name) {
        delete store[name];
    }
}

const dragHelper = new DragHelper();
export default dragHelper;