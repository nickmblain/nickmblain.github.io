import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);



export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#f9004d',
                success: '#3EB75E',
                accent: '#FF7F5C',
                teal: '#26B0A1',
                warning: '#FF8F3C',
                error: '#FF585A',
                cyan: '#42D3D5',
            },
        },
    },
    icons: {
        iconfont: 'mdi', 
    },
});