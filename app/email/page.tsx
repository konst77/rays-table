// app/welcome/page.tsx
export default function EmailPage() {
    return (
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-3xl">Welcome to Ray’s Table 🍽️</h1>
        <p className="mt-4 text-neutral-600">
          Thanks for hopping over from email. Your first recipe is coming soon.
        </p>
  
          <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <p className="text-sm">
              Psst—looks like you clicked from the welcome email. You’re in the right
              place. Enjoy a cozy browse while you wait. ✨
            </p>
          </div>
  
        <a
          href="/"
          className="mt-8 inline-block rounded-md bg-black px-4 py-2 text-white"
        >
          <p>
          Back to home
          </p>
        </a>
      </div>
    );
  }
  