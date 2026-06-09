import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import RadioGroup from '../../src/components/RadioGroup.vue'

describe('RadioGroup', () => {
  const options = [
    { value: 'a', label: 'Option A' },
    { value: 'b', label: 'Option B' },
    { value: 'c', label: 'Option C' },
  ]

  it('should render options correctly', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        modelValue: '',
        options,
      },
    })
    expect(wrapper.findAll('label').length).toBe(3)
    expect(wrapper.text()).toContain('Option A')
    expect(wrapper.text()).toContain('Option B')
    expect(wrapper.text()).toContain('Option C')
  })

  it('should select option when radio is changed', async () => {
    const wrapper = mount(RadioGroup, {
      props: {
        modelValue: '',
        options,
      },
    })
    const radios = wrapper.findAll('input[type="radio"]')
    await radios[0].setChecked(true)
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['a'])
  })

  it('should highlight selected option', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        modelValue: 'b',
        options,
      },
    })
    const labels = wrapper.findAll('label')
    expect(labels[1].classes()).toContain('border-medical-600')
    expect(labels[1].classes()).toContain('bg-medical-50')
  })

  it('should show invalid state', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        modelValue: '',
        options,
        invalid: true,
      },
    })
    expect(wrapper.html()).toContain('ring-danger')
  })
})
