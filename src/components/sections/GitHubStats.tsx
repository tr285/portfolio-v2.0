'use client';

import { motion } from 'framer-motion';
import { GitBranch, Star, Users, BookOpen } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import githubData from '@/data/github.json';

const languageColors: Record<string, string> = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
};

const DEFAULT_LANGUAGE_COLOR = '#8b949e';

function getLanguageColor(language: string | null): string {
  if (!language) return DEFAULT_LANGUAGE_COLOR;
  return languageColors[language] ?? DEFAULT_LANGUAGE_COLOR;
}

export default function GitHubStats() {
  const { user, repos } = githubData;

  const totalStars = repos.reduce(
    (sum: number, repo: { stargazers_count: number }) => sum + repo.stargazers_count,
    0
  );

  const topRepos = [...repos]
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return a.name.localeCompare(b.name);
    })
    .slice(0, 6);

  const stats = [
    { label: 'Total Repos', value: user.public_repos, icon: BookOpen },
    { label: 'Followers', value: user.followers, icon: Users },
    { label: 'Following', value: user.following, icon: Users },
    { label: 'Total Stars', value: totalStars, icon: Star },
  ];

  return (
    <section id="github" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm text-cyan-400">
            <FiGithub className="h-4 w-4" />
            Open Source
          </div>
          <h2
            className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
            dangerouslySetInnerHTML={{
              __html: 'GitHub <span class="neon-text-cyan text-cyan-400">Activity</span>',
            }}
          />
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="glass-panel group rounded-xl p-5 text-center transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(0,255,255,0.08)]"
              >
                <Icon className="mx-auto mb-3 h-6 w-6 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Top Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="mb-8 text-center text-xl font-semibold text-white sm:text-2xl">
            Top Repositories
          </h3>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topRepos.map(
              (
                repo: {
                  name: string;
                  html_url: string;
                  description: string | null;
                  language: string | null;
                  stargazers_count: number;
                  forks_count: number;
                },
                index: number
              ) => (
                <motion.a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * index }}
                  whileHover={{ scale: 1.03 }}
                  className="glass-panel group flex flex-col rounded-xl p-5 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(0,255,255,0.1)]"
                >
                  {/* Repo Name */}
                  <div className="mb-3 flex items-center gap-2">
                    <GitBranch className="h-4 w-4 shrink-0 text-cyan-400" />
                    <h4 className="truncate font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                      {repo.name}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-400">
                    {repo.description || 'No description available.'}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span
                          className="inline-block h-3 w-3 rounded-full"
                          style={{ backgroundColor: getLanguageColor(repo.language) }}
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitBranch className="h-3.5 w-3.5" />
                      {repo.forks_count}
                    </span>
                  </div>
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
