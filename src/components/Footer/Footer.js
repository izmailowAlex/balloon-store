import './Footer.css'

function Footer () {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="contributors">
          <span className="contributors__item">
            <a
              href="src/components/Footer/Footer"
              className="contributors__link rsschool"
              rel="noreferrer"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 30">
                <path
                  d="M4.982,8.818h.352a1.741,1.741,0,0,1,1,.308,3.184,3.184,0,0,1,.733,1.011l2.168,4.029h4.6l-1.963-3.795a4.543,4.543,0,0,0-.572-.82,4.067,4.067,0,0,0-.644-.689A4.071,4.071,0,0,0,9.6,8.378a4.449,4.449,0,0,0,1.422-.512A3.508,3.508,0,0,0,12.763,4.7a3.646,3.646,0,0,0-.616-2.125,3.034,3.034,0,0,0-1.6-1.2,9.65,9.65,0,0,0-2.872-.323H.923V14.137H4.982Zm0-5.114H6.77a2.481,2.481,0,0,1,1.509.337A1.3,1.3,0,0,1,8.425,5.77a1.025,1.025,0,0,1-.659.411,6.579,6.579,0,0,1-1.07.175H4.982ZM18.623,26.255a2.288,2.288,0,0,1-1.758.644,2.249,2.249,0,0,1-1.861-.8,4.944,4.944,0,0,1-.659-2.99,4.7,4.7,0,0,1,.557-2.578,2.554,2.554,0,0,1,3.209-.865,2.325,2.325,0,0,1,.835.718,3.139,3.139,0,0,1,.395.879l3.576-.791a6.04,6.04,0,0,0-2.11-3.077,6.726,6.726,0,0,0-3.9-1,6.616,6.616,0,0,0-4.894,1.744,5.245,5.245,0,0,0-.813,1.08,3.582,3.582,0,0,0-1.311-1.886,6.525,6.525,0,0,0-3.825-.938,8.312,8.312,0,0,0-3.223.513,3.861,3.861,0,0,0-1.759,1.407A3.4,3.4,0,0,0,.5,20.218a3.186,3.186,0,0,0,1.143,2.535,8.565,8.565,0,0,0,3.8,1.6,5.085,5.085,0,0,1,2.081.762,1.161,1.161,0,0,1,.439.908,1.2,1.2,0,0,1-.468.938,1.941,1.941,0,0,1-1.334.41,2.142,2.142,0,0,1-1.787-.806,2.95,2.95,0,0,1-.513-1.436L0,25.375a5.16,5.16,0,0,0,1.465,3.283c.865.864,2.4,1.289,4.631,1.289a7.863,7.863,0,0,0,3.15-.557A4.448,4.448,0,0,0,11.2,27.779a4.663,4.663,0,0,0,.235-.419,5.379,5.379,0,0,0,2.182,1.957,8.457,8.457,0,0,0,3.488.616A7.2,7.2,0,0,0,20,29.42a4.914,4.914,0,0,0,1.9-1.51,6.608,6.608,0,0,0,1.128-2.491L19.488,24.35A4.19,4.19,0,0,1,18.623,26.255Zm-8.29-3.794a5.3,5.3,0,0,0-.633-.382,16.893,16.893,0,0,0-3.81-1.158,3.24,3.24,0,0,1-1.362-.483.708.708,0,0,1-.293-.557.852.852,0,0,1,.351-.733,1.565,1.565,0,0,1,1.055-.307,1.925,1.925,0,0,1,1.348.395,2.046,2.046,0,0,1,.645,1.29l3.06-.177A8.462,8.462,0,0,0,10.333,22.461Zm36.189-6.082a6.758,6.758,0,0,0-4.982,1.787,5.669,5.669,0,0,0-1.23,1.917v-3.47H36.236V21.2H31.811V16.613H27.767v13.1h4.044v-5.3h4.425v5.305H40.31V26.276a5.866,5.866,0,0,0,.351.726,5.586,5.586,0,0,0,2.359,2.227,8.368,8.368,0,0,0,3.663.7,7.467,7.467,0,0,0,3.649-.821,5.494,5.494,0,0,0,2.227-2.286,8.072,8.072,0,0,0,.777-3.766,6.6,6.6,0,0,0-1.773-4.923A6.853,6.853,0,0,0,46.522,16.379Zm2.037,9.671a2.8,2.8,0,0,1-4.03-.015,4.491,4.491,0,0,1-.732-2.857,4.341,4.341,0,0,1,.747-2.858,2.483,2.483,0,0,1,1.964-.864,2.541,2.541,0,0,1,2.022.85,4.006,4.006,0,0,1,.747,2.7A4.818,4.818,0,0,1,48.559,26.05Zm26.126.439V16.613H70.626v3.663a5.679,5.679,0,0,0-1.334-2.139,6.508,6.508,0,0,0-4.357-1.709,11.7,11.7,0,0,0,2.088-1.251,10.763,10.763,0,0,0,4.061-5.986,7.431,7.431,0,0,0-1.157-6.332C67.244-.7,61.573-.974,57.286,2.254a10.8,10.8,0,0,0-4,5.8c-.023-.041-.039-.085-.063-.125a3.932,3.932,0,0,0-1.671-1.45,16.893,16.893,0,0,0-3.81-1.158,3.24,3.24,0,0,1-1.362-.483.709.709,0,0,1-.293-.557.888.888,0,0,1,.351-.733,1.651,1.651,0,0,1,1.055-.293,2.031,2.031,0,0,1,1.348.41,2.046,2.046,0,0,1,.645,1.29l3.81-.22a4,4,0,0,0-1.568-2.975A6.522,6.522,0,0,0,47.9.818a8.342,8.342,0,0,0-3.224.512,3.853,3.853,0,0,0-1.758,1.407,3.4,3.4,0,0,0-.586,1.905,3.181,3.181,0,0,0,1.142,2.535,8.575,8.575,0,0,0,3.8,1.6,5.108,5.108,0,0,1,2.066.762,1.161,1.161,0,0,1,.439.908,1.18,1.18,0,0,1-.469.938,1.933,1.933,0,0,1-1.333.41A2.152,2.152,0,0,1,46.185,11a2.96,2.96,0,0,1-.513-1.436l-3.853.249a5.026,5.026,0,0,0,1.48,3.268c.864.864,2.4,1.289,4.63,1.289a7.881,7.881,0,0,0,3.15-.556A4.45,4.45,0,0,0,53.028,12.2c.056-.083.1-.173.148-.26a6.913,6.913,0,0,0,1.208,2.629,7.425,7.425,0,0,0,5.767,2.858H60.2a5.564,5.564,0,0,0-.925.735,6.768,6.768,0,0,0-1.788,5A7.478,7.478,0,0,0,58.391,27a5.586,5.586,0,0,0,2.359,2.227,8.368,8.368,0,0,0,3.663.7,7.467,7.467,0,0,0,3.649-.821,5.494,5.494,0,0,0,2.227-2.286,5.812,5.812,0,0,0,.337-.785v3.672H81V26.489ZM60.193,16.431a6.442,6.442,0,0,1-5.01-2.461,6.442,6.442,0,0,1-.985-5.5,9.761,9.761,0,0,1,3.69-5.422A9.885,9.885,0,0,1,63.767,1a6.55,6.55,0,0,1,5.361,2.466,6.445,6.445,0,0,1,.984,5.495,9.762,9.762,0,0,1-3.69,5.422A9.788,9.788,0,0,1,60.193,16.431Zm6.1,9.619a2.8,2.8,0,0,1-4.03-.015,4.491,4.491,0,0,1-.732-2.857,4.341,4.341,0,0,1,.747-2.858,2.462,2.462,0,0,1,1.963-.864,2.538,2.538,0,0,1,2.022.85,4,4,0,0,1,.748,2.7A4.818,4.818,0,0,1,66.289,26.05ZM62.023,10.625a1.709,1.709,0,0,1-.074,1.113,2.384,2.384,0,0,1-.908,1.07,3.221,3.221,0,0,1-1.245.586,1.73,1.73,0,0,1-1.012-.147,2.431,2.431,0,0,1-.893-.747l1.26-1.172a1.739,1.739,0,0,0,.381.425.6.6,0,0,0,.351.117.461.461,0,0,0,.279-.1.483.483,0,0,0,.234-.439,1.478,1.478,0,0,0-.307-.689L58.037,7.753,59.5,6.727l1.8,2.564A5.114,5.114,0,0,1,62.023,10.625Zm5.07-3.209a1.89,1.89,0,0,0-.338-1.011,1.5,1.5,0,0,0-.674-.572,1.681,1.681,0,0,0-.967-.1,7.737,7.737,0,0,0-1.67.542,1.414,1.414,0,0,1-.615.176.325.325,0,0,1-.249-.132.38.38,0,0,1-.059-.352.721.721,0,0,1,.308-.381l.043-.044a.79.79,0,0,1,1.1.147L65.29,4.646a1.768,1.768,0,0,0-1.319-.674,2.974,2.974,0,0,0-1.626.63,3.7,3.7,0,0,0-1.026,1,1.685,1.685,0,0,0-.278.952,1.58,1.58,0,0,0,.278.835,1.413,1.413,0,0,0,1.055.63,3.881,3.881,0,0,0,1.773-.381,2.372,2.372,0,0,1,.938-.249.42.42,0,0,1,.132.03.513.513,0,0,1,.322.644.887.887,0,0,1-.381.484.937.937,0,0,1-.849.161,1.263,1.263,0,0,1-.543-.381L62.433,9.379a2.151,2.151,0,0,0,1.377.806,2.906,2.906,0,0,0,1.993-.7,3.568,3.568,0,0,0,1-1A1.842,1.842,0,0,0,67.093,7.416Z"
                  fill="#b4b4b4"
                />
              </svg>
            </a>
          </span>
          <span className="contributors__item">
            <a
              href="src/components/Footer/Footer"
              className="contributors__link github"
              rel="noreferrer"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path
                  d="M14.883,0a14.885,14.885,0,0,0-4.7,29.007c.743.136,1.015-.324,1.015-.719,0-.352-.013-1.289-.02-2.53-4.14.9-5.014-2-5.014-2a3.948,3.948,0,0,0-1.653-2.177c-1.351-.923.1-.905.1-.905A3.124,3.124,0,0,1,6.9,22.214a3.167,3.167,0,0,0,4.332,1.237,3.188,3.188,0,0,1,.944-1.99c-3.308-.375-6.78-1.652-6.78-7.356a5.755,5.755,0,0,1,1.532-3.993A5.363,5.363,0,0,1,7.07,6.173s1.25-.4,4.093,1.526a14.11,14.11,0,0,1,7.453,0C21.456,5.773,22.7,6.173,22.7,6.173a5.348,5.348,0,0,1,.148,3.939,5.743,5.743,0,0,1,1.53,3.993c0,5.718-3.479,6.976-6.8,7.345a3.553,3.553,0,0,1,1.01,2.756c0,1.989-.018,3.595-.018,4.082,0,.4.268.862,1.023.717A14.886,14.886,0,0,0,14.883,0Z"
                  fill="#b4b4b4"
                />
              </svg>
            </a>
          </span>
        </div>
        <div className="footer__copyright">2022, All Rights Reserved</div>
      </div>
    </footer>
  )
}

export default Footer
