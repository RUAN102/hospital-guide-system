import { describe, expect, it } from 'vitest'
import { findDepartment, departmentGroups } from '../../src/guide/departments'

describe('departments', () => {
  it('should export departmentGroups data', () => {
    expect(departmentGroups).toBeDefined()
    expect(Array.isArray(departmentGroups)).toBe(true)
    expect(departmentGroups.length).toBeGreaterThan(0)
  })

  it('should find department by id', () => {
    const result = findDepartment('general-surgery')
    expect(result).toBeDefined()
    expect(result?.item.name).toBe('普外科')
    expect(result?.category).toBe('外科')
  })

  it('should return null for non-existent department', () => {
    const result = findDepartment('non-existent')
    expect(result).toBeNull()
  })

  it('should have correct department structure', () => {
    const group = departmentGroups[0]
    expect(group).toHaveProperty('category')
    expect(group).toHaveProperty('items')
    const dept = group.items[0]
    expect(dept).toHaveProperty('id')
    expect(dept).toHaveProperty('name')
    expect(dept).toHaveProperty('intro')
    expect(dept).toHaveProperty('scope')
    expect(dept).toHaveProperty('conditions')
  })
})
