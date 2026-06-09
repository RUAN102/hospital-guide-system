import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import CheckboxGroup from '../../src/components/CheckboxGroup.vue'

describe('CheckboxGroup', () => {
  const options = [
    { value: 'a', label: 'Option A' },
    { value: 'b', label: 'Option B' },
    { value: 'c', label: 'Option C' },
  ]

  it('should render options correctly', () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        modelValue: [],
        options,
      },
    })
    expect(wrapper.findAll('label').length).toBe(3)
    expect(wrapper.text()).toContain('Option A')
    expect(wrapper.text()).toContain('Option B')
    expect(wrapper.text()).toContain('Option C')
  })

  it('should emit update event when checkbox is checked', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        modelValue: [],
        options,
      },
    })
    const checkboxes = wrapper.findAll('input[type="checkbox"]')
    await checkboxes[0].trigger('change')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    const emittedValues = wrapper.emitted('update:modelValue')?.[0] as [(string | number)[]]
    expect(emittedValues[0]).toContain('a')
  })

  it('should highlight multiple selected options', () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        modelValue: ['a', 'c'],
        options,
      },
    })
    const labels = wrapper.findAll('label')
    expect(labels[0].classes()).toContain('border-medical-600')
    expect(labels[0].classes()).toContain('bg-medical-50')
    expect(labels[2].classes()).toContain('border-medical-600')
    expect(labels[2].classes()).toContain('bg-medical-50')
    expect(labels[1].classes()).not.toContain('border-medical-600')
  })

  it('should show invalid state', () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        modelValue: [],
        options,
        invalid: true,
      },
    })
    expect(wrapper.html()).toContain('ring-danger')
  })
})
