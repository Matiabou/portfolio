export const Skill: React.FC<{ skill: string }> = ({ skill }) => (
  <span className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 px-4 py-2 rounded-full text-sm">
    {skill}
  </span>
);