const colors = {
    _red : {
        _density: 50,
        _rgb: {r: 255, g:0, b: 0},
        _hex: '#FF0000',

        get density() {
            return this._density;
        },
        get rgb() {
            return this._rgb;
        },
        get hex() {
            return this._hex;
        },
        set density(value) {
            this._density = value;
        }
    },
    _green : {
        _density: 70,
        _rgb: {r: 0, g:255, b: 0},
        _hex: '#00FF00',

        get density() {
            return this._density;
        },
        get rgb() {
            return this._rgb;
        },
        get hex() {
            return this._hex;
        },
        set density(value) {
            this._density = value;
        }
    },
    _blue : {
        _density: 60,
        _rgb: {r: 0, g:0, b: 255},
        _hex: '#0000FF',

        get density() {
            return this._density;
        },
        get rgb() {
            return this._rgb;
        },
        get hex() {
            return this._hex;
        },
        set density(value) {
            this._density = value;
        }
    }
};

function getAllDensity() {
    console.log('Current color density values:\n Red colors density: ', colors._red._density, '\n Green color density: ', colors._green._density, '\n Blue color density: ', colors._blue._density);
};

function setMaxDensity () {
    colors._red._density = 100;
    colors._green.density = 100;
    colors._blue._density = 100;

    console.log('Colors densities are changed to 100%.\n Changed values:\n Red colors density: ', colors._red._density, '\n Green color density: ', colors._green._density, '\n Blue color density: ', colors._blue._density);
};

getAllDensity();
setMaxDensity();
