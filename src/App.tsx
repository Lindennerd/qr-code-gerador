import QRCode from "qrcode";
import { useRef } from "react";
import "./App.css";

function App() {
  const linkRef = useRef<HTMLInputElement>(null);
  const qrCodeCanvasRef = useRef<HTMLCanvasElement>(null);

  function generateQRCode() {
    var link = linkRef.current?.value;
    if (!link) return;
    QRCode.toCanvas(qrCodeCanvasRef.current, link, function (error) {
      if (error) console.error(error);
      console.log("success!");
    });
  }

  // function copyQrCode() {
  //   if (qrCodeCanvasRef?.current == null) return;
  //   const canvasAsImage = new ClipboardItem({
  //     "image/png": qrCodeCanvasRef.current.toDataURL(),
  //   });
  //   navigator.clipboard.write([canvasAsImage]);
  // }

  return (
    <div className="page">
      <input
        type="text"
        name="link"
        placeholder="Link to QR Code!"
        ref={linkRef}
      />
      <button onClick={() => generateQRCode()}>Gerar</button>

      <canvas ref={qrCodeCanvasRef}></canvas>
      <div>{/* <button onClick={(e) => copyQrCode()}>Copiar</button> */}</div>
    </div>
  );
}

export default App;
