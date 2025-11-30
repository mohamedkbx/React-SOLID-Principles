import { useNavigate } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

export default function SRP() {
    const navigate = useNavigate();

    return (
        <PageTransition>
            <div className="min-h-screen p-8 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <button
                        onClick={() => navigate('/solid-principles')}
                        className="mb-8 text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                        ← Back to Principles
                    </button>

                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Single Responsibility Principle (SRP)</h1>

                    <div className="prose prose-slate max-w-none">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
                            <h2 className="text-xl font-semibold text-slate-800 mb-3">Definition</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Each component should have a single responsibility. If a component handles too many concerns,
                                it becomes harder to understand, maintain, and scale as the project grows.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-rose-50 p-6 rounded-xl border border-rose-100">
                                <h3 className="text-rose-800 font-semibold mb-4 flex items-center gap-2">
                                    ❌ Bad Example
                                </h3>
                                <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg text-sm overflow-x-auto">
                                    {`function UserProfile() {
  const [user, setUser] = React.useState<any>(null);

  React.useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then(setUser);
  }, []);

  return (
    <div>
      <h2>{user?.name}</h2>
      <button>Update User</button>
    </div>
  );
}`}
                                </pre>
                                <p className="mt-4 text-sm text-rose-700">
                                    This component handles both data fetching and UI rendering.
                                </p>
                            </div>

                            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                                <h3 className="text-emerald-800 font-semibold mb-4 flex items-center gap-2">
                                    ✅ Good Example
                                </h3>
                                <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg text-sm overflow-x-auto">
                                    {`// UserProfile.tsx
function UserProfile() {
  const user = useUser();
  return (
    <div>
      <UserDetails user={user} />
      <UpdateUserForm user={user} />
    </div>
  );
}

// useUser.ts
export function useUser() {
  // fetching user logic here
}`}
                                </pre>
                                <p className="mt-4 text-sm text-emerald-700">
                                    Data-fetching is handled by a custom hook, and the UI is separated into smaller components.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
