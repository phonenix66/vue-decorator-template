import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class Cute extends Vue {
    msg = 2345555;
    created() {
        console.log('create');
    }
    handle(data1, data2) {
        console.log('handle', data1, data2);
    }
    render() {
        return (
            <div class='cute-wrapper'>
                <a-button type='primary' onClick={this.handle.bind(this, 1, 2)}>
                    {this.msg}
                </a-button>
            </div>
        );
    }
}
export default Cute;
