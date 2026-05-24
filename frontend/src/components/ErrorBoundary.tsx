import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="min-h-dvh flex items-center justify-center px-4"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div className="text-center flex flex-col gap-4 max-w-sm">
            <h1 className="text-xl font-bold" style={{ color: "var(--text-1)" }}>
              Something went wrong
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white cursor-pointer transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #06B6D4, #3B82F6)" }}
            >
              Refresh page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
