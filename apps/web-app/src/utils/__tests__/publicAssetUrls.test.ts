import { describe, expect, it } from 'vitest';

import {
  getAbsolutePublicAssetUrl,
  getSkillMarkdownCandidateUrls,
  getSkillsIndexCandidateUrls,
  normalizeBasePath,
} from '../publicAssetUrls';

describe('public asset URL helpers', () => {
  it('normalizes dot-relative BASE_URL values', () => {
    expect(normalizeBasePath('./')).toBe('/');
    expect(normalizeBasePath('/ai-skills/')).toBe('/ai-skills/');
  });

  it('builds stable skills index candidates for gh-pages routes', () => {
    expect(
      getSkillsIndexCandidateUrls({
        baseUrl: '/ai-skills/',
        origin: 'https://yug.github.io',
        pathname: '/ai-skills/skill/some-id',
        documentBaseUrl: 'https://yug.github.io/ai-skills/',
      }),
    ).toEqual([
      'https://yug.github.io/ai-skills/skills.json',
      'https://yug.github.io/ai-skills/skills.json.backup',
      'https://yug.github.io/skills.json',
      'https://yug.github.io/skills.json.backup',
      'https://yug.github.io/ai-skills/skill/skills.json',
      'https://yug.github.io/ai-skills/skill/skills.json.backup',
      'https://yug.github.io/ai-skills/skill/some-id/skills.json',
      'https://yug.github.io/ai-skills/skill/some-id/skills.json.backup',
    ]);
  });

  it('builds stable markdown candidates for gh-pages routes', () => {
    expect(
      getSkillMarkdownCandidateUrls({
        baseUrl: '/ai-skills/',
        origin: 'https://yug.github.io',
        pathname: '/ai-skills/skill/react-patterns',
        documentBaseUrl: 'https://yug.github.io/ai-skills/',
        skillPath: 'skills/react-patterns',
      }),
    ).toEqual([
      'https://yug.github.io/ai-skills/skills/react-patterns/SKILL.md',
      'https://yug.github.io/skills/react-patterns/SKILL.md',
      'https://yug.github.io/ai-skills/skill/skills/react-patterns/SKILL.md',
      'https://yug.github.io/ai-skills/skill/react-patterns/skills/react-patterns/SKILL.md',
    ]);
  });

  it('rejects markdown asset paths that escape the skills tree', () => {
    const input = {
      baseUrl: '/ai-skills/',
      origin: 'https://yug.github.io',
      pathname: '/ai-skills/skill/react-patterns',
      documentBaseUrl: 'https://yug.github.io/ai-skills/',
    };

    expect(getSkillMarkdownCandidateUrls({ ...input, skillPath: 'skills/../../manifest.webmanifest' })).toEqual([]);
    expect(getSkillMarkdownCandidateUrls({ ...input, skillPath: 'skills/%2e%2e/%2e%2e/manifest.webmanifest' })).toEqual([]);
    expect(getSkillMarkdownCandidateUrls({ ...input, skillPath: 'https://evil.example/skills/demo' })).toEqual([]);
  });

  it('resolves absolute public asset URLs from the shared base path logic', () => {
    expect(
      getAbsolutePublicAssetUrl('/skill/react-patterns', {
        baseUrl: '/ai-skills/',
        origin: 'https://yug.github.io',
      }),
    ).toBe('https://yug.github.io/ai-skills/skill/react-patterns');
  });
});
