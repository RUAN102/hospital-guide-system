import { describe, expect, it, beforeEach } from 'vitest'
import { resetGuide, useGuideStore, findPart, bodyParts, internalGroups, mental } from '../../src/guide/store'

describe('guide store', () => {
  beforeEach(() => {
    resetGuide()
  })

  it('should initialize with empty state', () => {
    const store = useGuideStore()
    expect(store.state.category).toBe(null)
    expect(store.state.partValue).toBe(null)
    expect(store.state.baseSymptoms).toEqual([])
    expect(store.state.customDesc).toBe('')
    expect(store.state.detailedSymptoms).toEqual([])
  })

  it('should set category', () => {
    const store = useGuideStore()
    store.setCategory('body')
    expect(store.state.category).toBe('body')
    expect(store.state.partValue).toBe(null)
    expect(store.state.baseSymptoms).toEqual([])
  })

  it('should set part value', () => {
    const store = useGuideStore()
    store.setCategory('body')
    store.setPartValue('head')
    expect(store.state.partValue).toBe('head')
    expect(store.state.baseSymptoms).toEqual([])
  })

  it('should set base symptoms', () => {
    const store = useGuideStore()
    store.setBaseSymptoms(['headache', 'fever'])
    expect(store.state.baseSymptoms).toEqual(['headache', 'fever'])
  })

  it('should set custom description', () => {
    const store = useGuideStore()
    store.setCustomDesc('test description')
    expect(store.state.customDesc).toBe('test description')
  })

  it('should set detailed symptoms', () => {
    const store = useGuideStore()
    store.setDetailedSymptoms(['migraine', 'tension'])
    expect(store.state.detailedSymptoms).toEqual(['migraine', 'tension'])
  })

  it('should reset all state', () => {
    const store = useGuideStore()
    store.setCategory('body')
    store.setPartValue('head')
    store.setBaseSymptoms(['headache'])
    store.setDetailedSymptoms(['migraine'])
    store.setCustomDesc('test')

    store.reset()

    expect(store.state.category).toBe(null)
    expect(store.state.partValue).toBe(null)
    expect(store.state.baseSymptoms).toEqual([])
    expect(store.state.customDesc).toBe('')
    expect(store.state.detailedSymptoms).toEqual([])
  })
})

describe('guide data', () => {
  it('should export body parts data', () => {
    expect(bodyParts).toBeDefined()
    expect(Array.isArray(bodyParts)).toBe(true)
    expect(bodyParts.length).toBeGreaterThan(0)
  })

  it('should export internal groups data', () => {
    expect(internalGroups).toBeDefined()
    expect(Array.isArray(internalGroups)).toBe(true)
    expect(internalGroups.length).toBeGreaterThan(0)
  })

  it('should export mental data', () => {
    expect(mental).toBeDefined()
    expect(mental.value).toBe('mental')
  })

  it('should find body part', () => {
    const part = findPart('body', 'head')
    expect(part).toBeDefined()
    expect(part?.label).toBe('头部')
  })

  it('should find internal part', () => {
    const part = findPart('internal', 'heart')
    expect(part).toBeDefined()
    expect(part?.label).toBe('心脏')
  })

  it('should return mental part', () => {
    const part = findPart('mental', 'mental')
    expect(part).toBeDefined()
    expect(part?.label).toBe('精神情绪不适')
  })

  it('should return null for invalid inputs', () => {
    expect(findPart(null, 'head')).toBeNull()
    expect(findPart('body', null)).toBeNull()
    expect(findPart('body', 'invalid')).toBeNull()
  })
})
