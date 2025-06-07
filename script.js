function joinServer() {
  const link = "minecraft://?addExternalServer=VeltrixMC|in2.hostmc.fun|25650";
  window.location.href = link;
}

function copyIP() {
  navigator.clipboard.writeText("in2.hostmc.fun:25650").then(() => {
    alert("Server IP copied to clipboard!");
  });
}
