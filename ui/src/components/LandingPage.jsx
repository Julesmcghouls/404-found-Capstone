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
      <main>
        <p>Create the start of your journey</p>
      </main>

      <footer style={{ marginTop: "auto" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{color: "white"}}>Created by 404-Found</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
