import test from 'node:test';
import assert from 'node:assert/strict';
import { projects } from '../src/lib/data.js';

test('projects include rich case study content', () => {
  const project = projects[0];
  assert.ok(project.story, 'project should have a story');
  assert.ok(Array.isArray(project.highlights) && project.highlights.length > 0, 'project should have highlights');
  assert.ok(project.impact, 'project should have impact details');
  assert.ok(project.links && (project.links.github || project.links.demo || project.links.article), 'project should include at least one link');
});
