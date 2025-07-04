import React, { Suspense } from "react"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import ErrorBoundary from "./ErrorBoundary"
const RemoteButton = React.lazy(() => import("ui_remote/Button"))

const Home = React.lazy(() => import("./Home"))
const About = React.lazy(() => import("./About"))

export default function App() {
	return (
		<ErrorBoundary>
			<BrowserRouter>
				<RemoteButton label="Click Me" onClick={() => alert("Button Clicked!")} />
				<RemoteButton label="Another Button" onClick={() => alert("Another Button Clicked!")} variant="secondary" />
				<RemoteButton label="Danger Button" onClick={() => alert("Danger Button Clicked!")} variant="danger" />
				<RemoteButton label="Outlined Button" onClick={() => alert("Outlined Button Clicked!")} variant="outlined" />
				<RemoteButton label="Ghost Button" onClick={() => alert("Ghost Button Clicked!")} variant="ghost" />

				<RemoteButton label="Loading Button" onClick={() => alert("Loading Button Clicked!")} isLoading={true} />
				<RemoteButton label="Disabled Button" onClick={() => alert("Disabled Button Clicked!")} disabled={true} />

				<div className="text-center my-4">
					<RemoteButton label="Remote Button" onClick={() => alert("Remote Button Clicked!")} />
				</div>

				<div className="text-center my-4">
					<RemoteButton
						label="Remote Button with Custom Style"
						onClick={() => alert("Custom Remote Button Clicked!")}
						variant="outlined"
					/>
				</div>
				<h1 className="text-center text-2xl font-bold my-4">Welcome to the Host App</h1>
				<nav className="flex gap-4 justify-center my-4">
					<Link to="/" className="text-blue-600 hover:underline">
						Home
					</Link>
					<Link to="/about" className="text-green-600 hover:underline">
						About
					</Link>
				</nav>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</ErrorBoundary>
	)
}
