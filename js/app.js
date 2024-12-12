// Importar ethers.js
import { ethers } from "ethers";

// Inicialización básica
const connectWallet = async () => {
  if (typeof window.ethereum !== 'undefined') {
    console.log('Metamask detectado');
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log('Conectado a Metamask');
    } catch (err) {
      console.error('Error al conectar con Metamask:', err);
    }
  } else {
    console.log('Por favor, instala Metamask');
  }
};

// Llamar la función al cargar la página
connectWallet();


import { ethers } from "ethers";
import { CONTRACT_ADDRESSES, ABI } from "./constants.js";

let provider, signer, dexContract;

const init = async () => {
  if (typeof window.ethereum !== "undefined") {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    dexContract = new ethers.Contract(CONTRACT_ADDRESSES.simpleDex, ABI.simpleDex, signer);
    console.log("Conexión inicializada");
  } else {
    alert("Instala Metamask para continuar.");
  }
};

const agregarLiquidez = async (cantidadA, cantidadB) => {
  try {
    const cantidadAWei = ethers.utils.parseUnits(cantidadA.toString(), 18);
    const cantidadBWei = ethers.utils.parseUnits(cantidadB.toString(), 18);

    const tokenAContract = new ethers.Contract(CONTRACT_ADDRESSES.tokenA, ABI.erc20, signer);
    const tokenBContract = new ethers.Contract(CONTRACT_ADDRESSES.tokenB, ABI.erc20, signer);

    // Aprobar los tokens para el contrato del DEX
    await tokenAContract.approve(CONTRACT_ADDRESSES.simpleDex, cantidadAWei);
    await tokenBContract.approve(CONTRACT_ADDRESSES.simpleDex, cantidadBWei);

    // Agregar liquidez al contrato DEX
    const tx = await dexContract.agregarLiquidez(cantidadA, cantidadB);
    await tx.wait();
    alert("Liquidez agregada exitosamente");
  } catch (err) {
    console.error("Error al agregar liquidez:", err);
    alert("Error al agregar liquidez");
  }
};

document.addEventListener("DOMContentLoaded", init);

document.getElementById("formAgregarLiquidez").addEventListener("submit", async (e) => {
    e.preventDefault();
    const cantidadA = document.getElementById("cantidadA").value;
    const cantidadB = document.getElementById("cantidadB").value;
    await agregarLiquidez(cantidadA, cantidadB);
  });