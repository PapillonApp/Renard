import * as React from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";

function Papillon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.953 6.663c.1.436.238.888.413 1.348a9.66 9.66 0 00-1.268.208c-.728.173-1.403.44-1.94.826-.54.39-.996.946-1.123 1.682-.128.737.112 1.418.49 1.972.373.549.918 1.034 1.544 1.45.116.077.238.153.363.228 1.222.733 2.834 1.315 4.61 1.633 2.005.36 3.911.167 5.36-.258.079-.023.157-.047.235-.072a18.664 18.664 0 00-.426 2.553c-.067.752-.065 1.467.046 2.052.083.443.293 1.14.895 1.49.08.05.168.093.264.128.726.269 1.393-.075 1.807-.385.45-.336.884-.832 1.285-1.4.812-1.146 1.631-2.779 2.294-4.629.663-1.85 1.068-3.636 1.172-5.044.05-.697.033-1.36-.1-1.912-.106-.445-.345-1.038-.893-1.358a1.563 1.563 0 00-.275-.133c-.65-.24-1.272-.02-1.72.26-.459.287-.89.727-1.287 1.24-.277.36-.554.778-.826 1.25a13.482 13.482 0 00-2.183-3.7c-1.117-1.353-2.367-2.449-3.562-3.16a8.957 8.957 0 00-.512-.286c-.667-.343-1.353-.58-2.008-.634-.661-.055-1.362.074-1.926.555l.02.023c-.556.479-.812 1.17-.901 1.843-.092.684-.027 1.45.152 2.23zm3.796-2.205c.122.062.247.132.374.207.953.573 2.026 1.497 3.022 2.704.63.763 1.112 1.536 1.47 2.261-1.17-.635-2.642-1.139-4.248-1.426a16.244 16.244 0 00-1.857-.225 8.754 8.754 0 01-.629-1.772c-.14-.616-.168-1.128-.118-1.505.051-.385.167-.533.22-.577.05-.043.179-.117.491-.091.319.026.75.154 1.275.424zm-.39 9.554c-1.584-.283-2.95-.79-3.923-1.37a6.581 6.581 0 01-.256-.161c-.493-.327-.818-.643-1-.91-.178-.262-.179-.412-.167-.478.01-.065.063-.206.318-.39.26-.188.673-.372 1.245-.508.507-.12 1.101-.194 1.758-.212.326.54.7 1.071 1.122 1.582a9.317 9.317 0 003.356 2.584c-.767.05-1.599.017-2.453-.136zm.692-3.81c1.585.284 2.95.791 3.923 1.37.089.053.174.107.256.162.493.326.818.643 1 .91.024.035.044.068.063.1-.085.019-.18.034-.288.045-.408.039-.923-.002-1.499-.16-1.15-.312-2.463-1.061-3.533-2.357a10.599 10.599 0 01-.08-.098l.158.028zm9.234-.402c.262-.34.487-.562.66-.694.047.266.064.657.026 1.173-.086 1.177-.439 2.778-1.057 4.506-.62 1.727-1.362 3.184-2.04 4.142a5.401 5.401 0 01-.674.802 6.75 6.75 0 01.01-1.3c.112-1.258.47-2.897 1.04-4.543.03-.064.056-.132.078-.203.05-.108.085-.217.11-.318.59-1.581 1.253-2.795 1.848-3.566z"
      />
    </Svg>
  );
}

function Home(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <Path
        d="M3 13.314c0-1.635 0-2.453.304-3.188.305-.735.883-1.313 2.04-2.47l1-1c2.666-2.666 4-4 5.656-4 1.657 0 2.99 1.334 5.657 4l1 1c1.156 1.157 1.734 1.735 2.038 2.47.305.735.305 1.553.305 3.188V18c0 .932 0 1.398-.152 1.765a2 2 0 01-1.083 1.083C19.398 21 18.932 21 18 21h-.429c-.53 0-.796 0-1.016-.05a2 2 0 01-1.505-1.505c-.05-.22-.05-.485-.05-1.016V15a3 3 0 00-6 0v3.429c0 .53 0 .796-.05 1.016a2 2 0 01-1.505 1.505c-.22.05-.485.05-1.016.05H6c-.932 0-1.398 0-1.765-.152a2 2 0 01-1.083-1.083C3 19.398 3 18.932 3 18v-4.686z"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function HomeFill(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3 13.314c0-1.635 0-2.453.304-3.188.305-.735.883-1.313 2.04-2.47l1-1c2.666-2.666 4-4 5.656-4 1.657 0 2.99 1.334 5.657 4l1 1c1.156 1.157 1.734 1.735 2.038 2.47.305.735.305 1.553.305 3.188V18.5c0 .465 0 .697-.038.89a2 2 0 01-1.572 1.572c-.193.038-.425.038-.89.038s-.697 0-.89-.038a2 2 0 01-1.572-1.572C16 19.197 16 18.965 16 18.5V15a4 4 0 00-8 0v3.5c0 .465 0 .697-.038.89a2 2 0 01-1.572 1.572C6.197 21 5.965 21 5.5 21s-.697 0-.89-.038a2 2 0 01-1.572-1.572C3 19.197 3 18.965 3 18.5v-5.186z"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Calendar(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.035 8h17.93M3.035 8C3 8.842 3 9.83 3 11v2c0 3.771 0 5.657 1.172 6.828C5.343 21 7.229 21 11 21h2c3.771 0 5.657 0 6.828-1.172C21 18.657 21 16.771 21 13v-2c0-1.17 0-2.158-.035-3M3.035 8c.078-1.872.328-3.02 1.137-3.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172.809.808 1.06 1.956 1.137 3.828M8 12h.01m4 0h.01m4 0h.01M8 16h.01m4 0h.01m4 0h.01"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

function CalendarFill(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13 3h-2C7.229 3 5.343 3 4.172 4.172 3.363 4.98 3.112 6.128 3.035 8h17.93c-.078-1.872-.328-3.02-1.137-3.828C18.657 3 16.771 3 13 3z"
      />
      <Path
        d="M3.035 8h17.93M3.035 8C3 8.842 3 9.83 3 11v2c0 3.771 0 5.657 1.172 6.828C5.343 21 7.229 21 11 21h2c3.771 0 5.657 0 6.828-1.172C21 18.657 21 16.771 21 13v-2c0-1.17 0-2.158-.035-3M3.035 8c.078-1.872.328-3.02 1.137-3.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172.809.808 1.06 1.956 1.137 3.828M8 12h.01m4 0h.01m4 0h.01M8 16h.01m4 0h.01m4 0h.01"
        strokeWidth={2}
        strokeLinecap="round"
        fill="none"
      />
    </Svg>
  );
}

function Book(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 5.333L8.39 3.996c-2.45-.907-3.675-1.36-4.533-.764C3 3.829 3 5.135 3 7.747v8.506c0 2.612 0 3.918.857 4.515.858.597 2.083.143 4.532-.764L12 18.667m0-13.334v13.334m0-13.334l3.61-1.337c2.45-.907 3.675-1.36 4.532-.764C21 3.829 21 5.135 21 7.747v8.506c0 2.612 0 3.918-.858 4.515-.857.597-2.082.143-4.531-.764L12 18.667"
        strokeWidth={2}
      />
    </Svg>
  );
}

function Stats(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 3a9 9 0 106.862 14.824M12 3v9m0-9a9 9 0 018.064 5M12 12l8.064-4M12 12l6.862 5.824M20.065 8A8.963 8.963 0 0121 12a8.965 8.965 0 01-2.138 5.824"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

function News(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.22 20.923l-.195.98.195-.98zM3.077 17.78l-.98.195.98-.195zM18.886 3.472l.471-.882-.471.882zm1.642 1.642l.882-.471-.882.471zM10.114 3.472l-.471-.882.471.882zM8.472 5.114l-.882-.471.882.471zM12 6a1 1 0 100 2V6zm5 2a1 1 0 100-2v2zm-5 2a1 1 0 100 2v-2zm5 2a1 1 0 100-2v2zm-5 2a1 1 0 100 2v-2zm5 2a1 1 0 100-2v2zM7 11.667V21h2v-9.333H7zM4 16v-2.667H2V16h2zm4 4c-.977 0-1.32-.005-1.585-.058l-.39 1.962c.507.1 1.094.096 1.975.096v-2zm-6-4c0 .881-.005 1.468.096 1.976l1.962-.39C4.005 17.32 4 16.976 4 16H2zm4.415 3.942a3 3 0 01-2.357-2.357l-1.962.39a5 5 0 003.929 3.929l.39-1.962zM6.333 11c.369 0 .667.299.667.667h2A2.667 2.667 0 006.333 9v2zm0-2A4.333 4.333 0 002 13.333h2A2.333 2.333 0 016.333 11V9zM20 9.5V13h2V9.5h-2zM13 20H8v2h5v-2zm-4 1V9.5H7V21h2zm11-8c0 1.914-.002 3.249-.137 4.256-.132.978-.373 1.496-.742 1.865l1.415 1.415c.802-.803 1.147-1.814 1.309-3.014.157-1.171.155-2.665.155-4.522h-2zm-7 9c1.857 0 3.351.002 4.522-.155 1.2-.162 2.211-.507 3.014-1.31l-1.415-1.414c-.369.37-.887.61-1.865.742-1.007.135-2.342.137-4.256.137v2zm1.5-18c1.184 0 2.01 0 2.652.055.63.054.99.154 1.262.3l.943-1.765c-.611-.326-1.277-.463-2.035-.527C16.575 1.999 15.65 2 14.5 2v2zM22 9.5c0-1.15 0-2.075-.063-2.822-.064-.758-.2-1.424-.527-2.035l-1.764.943c.145.272.245.632.299 1.262.054.642.055 1.467.055 2.652h2zm-3.586-5.146a3 3 0 011.232 1.232l1.764-.943a5 5 0 00-2.053-2.053l-.943 1.764zM14.5 2c-1.15 0-2.075 0-2.822.063-.758.064-1.424.2-2.035.527l.943 1.764c.272-.145.632-.245 1.262-.299C12.49 4.001 13.315 4 14.5 4V2zM9 9.5c0-1.185 0-2.01.055-2.652.054-.63.154-.99.3-1.262L7.59 4.643c-.326.611-.463 1.277-.527 2.035C6.999 7.425 7 8.35 7 9.5h2zm.643-6.91A5 5 0 007.59 4.643l1.764.943a3 3 0 011.232-1.232L9.643 2.59zM12 8h5V6h-5v2zm0 4h5v-2h-5v2zm0 4h5v-2h-5v2z"
        strokeWidth={0}
      />
    </Svg>
  );
}

function NewsFill(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.455 2h.09c1.13 0 2.04 0 2.777.063.758.064 1.424.2 2.035.527a5 5 0 012.053 2.053c.326.611.463 1.277.527 2.035C22 7.415 22 8.326 22 9.455v3.618c0 1.824 0 3.293-.155 4.45-.162 1.2-.507 2.21-1.31 3.012-.802.803-1.813 1.148-3.013 1.31-1.156.155-2.625.155-4.449.155H7.884c-.817 0-1.375 0-1.86-.096a5 5 0 01-3.928-3.928C2 17.49 2 16.933 2 16.116v-2.783A4.333 4.333 0 016.333 9c.23 0 .454.03.667.084 0-.96.007-1.752.063-2.406.064-.758.2-1.424.527-2.035A5 5 0 019.643 2.59c.611-.326 1.277-.463 2.035-.527C12.415 2 13.326 2 14.455 2zM7 19.993v-8.326A.667.667 0 006.333 11 2.333 2.333 0 004 13.333V16c0 .977.005 1.32.058 1.585a3 3 0 002.357 2.357c.143.029.309.043.585.05zM11 6a1 1 0 100 2h7a1 1 0 100-2h-7zm0 4a1 1 0 100 2h7a1 1 0 100-2h-7zm0 4a1 1 0 100 2h7a1 1 0 100-2h-7z"
        strokeWidth={0}
      />
    </Svg>
  );
}

function UserCheck(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.461 11.895C6.893 11.895 4 14.722 4 18.21V19m6.461-7.105c-2.23 0-4.038-1.768-4.038-3.948C6.423 5.767 8.231 4 10.461 4c2.23 0 4.039 1.767 4.039 3.947s-1.808 3.948-4.039 3.948zm0 0A6.49 6.49 0 0116 14.955"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M14 18l2 2 4-4"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Messages(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0_11_89)" strokeWidth={2}>
        <G
          opacity={0.1}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M14 9a2 2 0 01-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 012 2v5zM18 9h2a2 2 0 012 2v11l-4-4h-6a2 2 0 01-2-2v-1" />
        </G>
        <Path
          d="M10 2H6c-1.886 0-2.828 0-3.414.6C2 3.2 2 4.165 2 6.095v5.687c0 1.763 0 2.644.324 2.949.224.21.53.305.83.257.434-.07.912-.803 1.867-2.27.376-.577.564-.866.817-1.069.182-.145.386-.257.605-.331.306-.103.644-.103 1.322-.103H10c1.886 0 2.828 0 3.414-.6.586-.6.586-1.565.586-3.496V6.095c0-1.93 0-2.895-.586-3.495C12.828 2 11.886 2 10 2z"
        />
        <Path
          d="M11 14.725c0 1.783 0 2.674.537 3.227.537.554 1.401.554 3.13.554h2.048c.622 0 .932 0 1.212.095.2.068.388.172.555.306.232.188.404.454.749.987.875 1.354 1.313 2.03 1.711 2.095a.898.898 0 00.76-.238c.298-.28.298-1.094.298-2.722V13.78c0-1.782 0-2.673-.537-3.226C20.926 10 20.062 10 18.333 10H17.5"
          strokeLinecap="round"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_11_89">
          <Path d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function MessagesFill(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0_11_109)" strokeWidth={2}>
        <G
          opacity={0.1}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M14 9a2 2 0 01-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 012 2v5zM18 9h2a2 2 0 012 2v11l-4-4h-6a2 2 0 01-2-2v-1" />
        </G>
        <Path
          d="M10 2H6c-1.886 0-2.828 0-3.414.6C2 3.2 2 4.165 2 6.095v5.687c0 1.763 0 2.644.324 2.949.224.21.53.305.83.257.434-.07.912-.803 1.867-2.27.376-.577.564-.866.817-1.069.182-.145.386-.257.605-.331.306-.103.644-.103 1.322-.103H10c1.886 0 2.828 0 3.414-.6.586-.6.586-1.565.586-3.496V6.095c0-1.93 0-2.895-.586-3.495C12.828 2 11.886 2 10 2z"
          stroke="#fff"
        />
        <Path
          d="M11 14.725c0 1.783 0 2.674.537 3.227.537.554 1.401.554 3.13.554h2.048c.622 0 .932 0 1.212.095.2.068.388.172.555.306.232.188.404.454.749.987.875 1.354 1.313 2.03 1.711 2.095a.898.898 0 00.76-.238c.298-.28.298-1.094.298-2.722V13.78c0-1.782 0-2.673-.537-3.226C20.926 10 20.062 10 18.333 10H17.5"
          strokeLinecap="round"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_11_109">
          <Path d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function Competences(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={2}
      {...props}
    >
      <Path
        d="M3 9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3c2.828 0 4.243 0 5.121.879C15 4.757 15 6.172 15 9c0 2.828 0 4.243-.879 5.121C13.243 15 11.828 15 9 15c-2.828 0-4.243 0-5.121-.879C3 13.243 3 11.828 3 9z"
      />
      <Path
        d="M10.996 18.381a6 6 0 107.61-8.745"
        strokeLinecap="round"
      />
      <Path
        d="M9 6v3m0 0v3m0-3H6m3 0h3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function CompetencesFill(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.996 18.381a6 6 0 107.61-8.745"
        strokeWidth={2}
        strokeLinecap="round"
        fill="none"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.07 2h-.14c-1.355 0-2.471 0-3.355.119-.928.124-1.747.396-2.403 1.053-.657.656-.929 1.475-1.053 2.403-.12.884-.119 2-.119 3.354v.142c0 1.354 0 2.47.119 3.354.124.928.396 1.747 1.053 2.403.656.657 1.475.929 2.403 1.053.884.12 2 .119 3.354.119h.142c1.354 0 2.47 0 3.354-.119.928-.124 1.747-.396 2.403-1.053.657-.656.929-1.475 1.053-2.403.12-.884.119-2 .119-3.354v-.142c0-1.354 0-2.47-.119-3.354-.124-.928-.396-1.747-1.053-2.403-.656-.657-1.475-.929-2.403-1.053-.884-.12-2-.119-3.354-.119zM10 6a1 1 0 10-2 0v2H6a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V6z"
      />
    </Svg>
  );
}

export {
  Papillon,
  Home,
  HomeFill,
  Calendar,
  CalendarFill,
  Book,
  Stats,
  News,
  NewsFill,
  UserCheck,
  Messages,
  MessagesFill,
  Competences,
  CompetencesFill,
};