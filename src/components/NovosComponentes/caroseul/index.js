
import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AlbumRotator = () => {
  useEffect(() => {
    const loadShaders = async () => {
      // Carrega os shaders
      const vertexShader = await fetch('/shaders/vertex.glsl').then(res => res.text());
      const fragmentShader = await fetch('/shaders/fragment.glsl').then(res => res.text());
      const noiseShader = await fetch('/shaders/noise.glsl').then(res => res.text());

      // Aqui você pode inicializar os shaders usando WebGL ou Three.js, se necessário
    };

    loadShaders();
  }, []);

  return (
    <div id="album-rotator">
      <div id="album-rotator-holder">
        <a target="_top" className="album-item" href="https://twitter.com/smpnjn">
          <span className="album-details">
            <span className="icon"><i className="far fa-at"></i> smpnjn</span>
            <span className="title">Click to</span>
            <span className="subtitle">Follow</span>
            <span className="subtext">On Twitter</span>
          </span>
        </a>
        <a target="_top" className="album-item" href="https://fjolt.com/article/apple-cards-webl-gl-javascript">
          <span className="album-details">
            <span className="title">Read the</span>
            <span className="subtitle">Tutorial</span>
            <span className="subtext">View tutorial for this effect</span>
          </span>
        </a>
        <a target="_top" className="album-item" href="https://twitter.com/smpnjn">
          <span className="album-details">
            <span className="title">Finally</span>
            <span className="subtitle">We Go</span>
            <span className="subtext">Some text to describe this item</span>
          </span>
        </a>
        <a target="_top" className="album-item" href="https://twitter.com/smpnjn">
          <span className="album-details">
            <span className="title">And</span>
            <span className="subtitle">One More</span>
            <span className="subtext">Some text to describe this item</span>
          </span>
        </a>
        <a className="album-item" href="https://twitter.com/smpnjn">
          <span className="album-details">
            <span className="title">And</span>
            <span className="subtitle">Finally..</span>
            <span className="subtext">Some text to describe this item</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default AlbumRotator;
