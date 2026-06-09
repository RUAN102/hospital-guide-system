import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import BtnPrev from '../../src/components/BtnPrev.vue'
import BtnNext from '../../src/components/BtnNext.vue'
import BtnNextPage from '../../src/components/BtnNextPage.vue'

describe('BtnPrev', () => {
  it('should render correctly', () => {
    const wrapper = mount(BtnPrev)
    expect(wrapper.text()).toContain('上一步')
  })

  it('should emit click event', async () => {
    const wrapper = mount(BtnPrev)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('should be disabled', () => {
    const wrapper = mount(BtnPrev, {
      props: { disabled: true },
    })
    expect(wrapper.find('button').attributes('disabled')).toBe('')
  })
})

describe('BtnNext', () => {
  it('should render correctly', () => {
    const wrapper = mount(BtnNext)
    expect(wrapper.text()).toContain('下一步')
  })

  it('should emit click event', async () => {
    const wrapper = mount(BtnNext)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('should be disabled', () => {
    const wrapper = mount(BtnNext, {
      props: { disabled: true },
    })
    expect(wrapper.find('button').attributes('disabled')).toBe('')
  })
})

describe('BtnNextPage', () => {
  it('should render correctly', () => {
    const wrapper = mount(BtnNextPage)
    expect(wrapper.text()).toContain('下一页')
  })

  it('should emit click event', async () => {
    const wrapper = mount(BtnNextPage)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('should be disabled', () => {
    const wrapper = mount(BtnNextPage, {
      props: { disabled: true },
    })
    expect(wrapper.find('button').attributes('disabled')).toBe('')
  })
})
