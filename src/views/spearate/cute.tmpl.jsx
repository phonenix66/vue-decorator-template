import Vue from 'vue/dist/vue.js';
import Component from 'vue-class-component';

import '@/views/spearate/cute.tmpl.less';
@Component({
    name: 'Cute'
    // template: require('./cute.tmpl.html')
})
export default class extends Vue {
    msg = 2345555;
    render() {
        return (
            <div class='cute-wrapper'>
                <div>{this.msg}</div>
            </div>
        );
    }
}
