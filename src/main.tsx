import { VNode, h as render } from 'vue';
import { createApp, reactive, defineComponent } from 'vue'

// TODO: implement -> node_modules/@vue/runtime-core/dist/runtime-core.d.ts
// TODO: https://github.com/vuejs/vue-next/blob/eee50956924d7d2c916cdb8b99043da616e53af5/packages/runtime-core/src/h.ts
//
// React Style `h(Counter, {}, [h(), h()])`
//  Vue  Style `h('div', {}, h(), h())`
// まだまだ追従できていないので対応できていない機能も多い
export function h(c: any, o: any, ...args: any): any {
  const arg = [...args] as any[];
  return render(c, o, arg)
}


export const Counter = defineComponent({
  setup() {
    const state = reactive<{ count: number }>({
      count: 0
    })
    const increment = () => {
      state.count ++
    }
    return () => (
      <div>
        <div>{state.count}</div>
        <button type="button" style={{
          fontFamily: 'Menlo'
        }} onClick={() => {
          increment()
        }}>increment</button>
      </div>
    )
  },
})

const App = defineComponent({
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <Counter />
      </div>
    )
  }
})

createApp(App).mount('#root')
