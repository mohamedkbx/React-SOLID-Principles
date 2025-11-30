import { useNavigate } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

export default function DIP() {
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

                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Dependency Inversion Principle (DIP)</h1>

                    <div className="prose prose-slate max-w-none">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
                            <h2 className="text-xl font-semibold text-slate-800 mb-3">Definition</h2>
                            <p className="text-slate-600 leading-relaxed">
                                High-level components should depend on abstractions (hooks, props, context), not concrete implementations.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-rose-50 p-6 rounded-xl border border-rose-100">
                                <h3 className="text-rose-800 font-semibold mb-4 flex items-center gap-2">
                                    ❌ Bad Example
                                </h3>
                                <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg text-sm overflow-x-auto">
                                    {`function UserList() {
  const [users, setUsers] = React.useState<any[]>([]);
  React.useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return <ul>{users.map((u) => <li key={u.id}>{u.name}</li>)}</ul>;
}`}
                                </pre>
                                <p className="mt-4 text-sm text-rose-700">
                                    The component depends directly on the fetch API and implementation details.
                                </p>
                            </div>

                            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                                <h3 className="text-emerald-800 font-semibold mb-4 flex items-center gap-2">
                                    ✅ Good Example
                                </h3>
                                <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg text-sm overflow-x-auto">
                                    {`// useUsers.ts
export function useUsers() {
  const [users, setUsers] = React.useState<any[]>([]);
  React.useEffect(() => {
    fetch("/api/users") // low-level detail hidden here
      .then((res) => res.json())
      .then(setUsers);
  }, []);
  return users;
}

// UserList.tsx
function UserList() {
  const users = useUsers(); // 👌 depends on abstraction
  return <ul>{users.map((u) => <li key={u.id}>{u.name}</li>)}</ul>;
}`}
                                </pre>
                                <p className="mt-4 text-sm text-emerald-700">
                                    UserList depends on the abstraction (useUsers hook) rather than the concrete fetching logic.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
