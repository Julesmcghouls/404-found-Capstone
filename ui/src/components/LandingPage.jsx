//import statement for React

const LandingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "0 20px", // Added padding for better spacing on smaller screens
        backgroundImage: `url(./dragonlance.avif)`, // Set the background image to the dragon image
        backgroundSize: "cover", // Make the background image cover the whole element
        backgroundPosition: "center", // Center the background image
        opacity: 0.8, // Reduce the opacity of the background image to make it look like a watermark
      }}
    >
      <h1 style={{ textAlign: "center" }}>D&D Character Creator</h1>
      <nav></nav>

      <main role="main" style={{ textAlign: "center", marginTop: "20px" }}>
        <p>Create the start of your journey</p>
      </main>

      <footer className="mastfoot mt-auto" style={{ marginTop: "auto" }}>
        <div className="inner" style={{ textAlign: "center" }}>
          <p>Created by 404-Found</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
