export const randomNumber = () => {
    const datos = "abcdefghijklmnopqrstuvwxyz0123456789";
    let randomNumber = 0;
    for (let i = 0; i < 6; i++) {
      randomNumber += datos.charAt(
        Math.floor(Math.random() * datos.length)
      );
    }
    return randomNumber;
<<<<<<< HEAD
  };
=======
  };
  
>>>>>>> 3c8630eb5cf5a297ee7ac2220c1d395e134a8141
