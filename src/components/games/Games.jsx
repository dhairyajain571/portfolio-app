import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Games() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "cube runner/Build/cube runner.loader.js",
    dataUrl: "cube runner/Build/cube runner.data",
    frameworkUrl: "cube runner/Build/cube runner.framework.js",
    codeUrl: "cube runner/Build/cube runner.wasm",
  });
  const loadingPercentage = Math.round(loadingProgression * 100);
  return (<section>
  {isLoaded === false && (
    // We'll conditionally render the loading overlay if the Unity
    // Application is not loaded.
    <div className="loading-overlay">
      <p>Loading... ({loadingPercentage}%)</p>
    </div>
  )}
  <Unity className="unity" unityProvider={unityProvider} 
  style={{
    width:"100%",
    height:"80%",
    justifySelf: "center",
    alignSelf:"center"

  }}/>
</section>);
}





export default Games





