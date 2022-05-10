import * as React from 'react';
import gaze from  './assets/guard_gaze.png'
import eye from  './assets/police_eye.png'
import lens from  './assets/security_lens.png'

function ControlPanel() {
  return (
    <div className="control-panel">
      <h3>Anti-Surveillance Map</h3>
      <p>
      marginalized groups throughout the world have been subjected to various forms of surveillance since the onset of global colonialism. since then, the technology has only grown more sophisticated and violent in nature while these forces continues to exist as a normalized part of our lives. those who are subjected to these oppresive systems of control, which will eventually be everyone, can work to obstruct and circumvent the ever expanding tools of control.  
      </p>

      <div className="symbol-legend">
          <div className="legend-item">
            <img src={gaze} width={75} />
            <h3>Guardian Gaze</h3>
          </div>
          <div className="legend-item">
            <img src={eye} width={75} />
            <h3>Police Surveillance</h3>
          </div>
          <div className="legend-item">
            <img src={lens} width={75} />
            <h3>Security Lens</h3>
          </div>
    
      <div className="control-panel-links">
        <a
          href="https://www.figma.com/proto/AnC01vRIvAqi8O2t2iOloA/tech_of_prtoest_final_presenation?node-id=601%3A18&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=601%3A18"
          target="_blank"
        >
          Presentation
        </a>
        <a
          href="https://drive.google.com/file/d/1Mxr05sc_Bz75MQIcHp-zZM5bnN3cM5ru/view?usp=sharing"
          target="_blank"
        >
          Zine
        </a>
        <a
          href="https://github.com/gabedeko/anti-surveillance-mapping"
          target="_blank"
        >
          Code
        </a>
      </div>

      <div className="control-panel-footer">
        <h5>Technology of Protest</h5>
        <h5>Art, Media, and Technology</h5>
        <h5>Spring 2022</h5>
      </div>
          
        </div>
    </div>
  );
}

export default ControlPanel;
