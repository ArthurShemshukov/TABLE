const totalDepositInput = document.getElementById("totalDeposit");
    const riskPercentageInput = document.getElementById("riskPercentage");
    const stopLossPercentageInput = document.getElementById("stopLossPercentage");
    const takeProfitPercentageInput = document.getElementById("takeProfitPercentage");
    const leverageInput = document.getElementById("leverage");

    const lossUSDOutput = document.getElementById("lossUSD");
    const positionSizeOutput = document.getElementById("positionSize");
    const calculatedLossOutput = document.getElementById("calculatedLoss");
    const calculatedProfitOutput = document.getElementById("calculatedProfit");
    const marginOutput = document.getElementById("margin");
    const positionSizeForProfitOutput = document.getElementById("positionSizeForProfit");

    function calculate() {
      const totalDeposit = parseFloat(totalDepositInput.value);
      const riskPercentage = parseFloat(riskPercentageInput.value);
      const stopLossPercentage = parseFloat(stopLossPercentageInput.value);
      const takeProfitPercentage = parseFloat(takeProfitPercentageInput.value);
      const leverage = parseFloat(leverageInput.value);

      const lossUSD = (totalDeposit * (riskPercentage / 100)).toFixed(2);
      const positionSize = (totalDeposit * (riskPercentage / 100) / (stopLossPercentage / 100)).toFixed(2);
      const calculatedLoss = (parseFloat(positionSize) * (stopLossPercentage / 100)).toFixed(2);
      const calculatedProfit = (parseFloat(positionSize) * (takeProfitPercentage / 100)).toFixed(2);
      const margin = (parseFloat(positionSize) / leverage).toFixed(2);

      lossUSDOutput.textContent = "$" + lossUSD;
      positionSizeOutput.textContent = "$" + positionSize;
      calculatedLossOutput.textContent = "$" + calculatedLoss;
      calculatedProfitOutput.textContent = "$" + calculatedProfit;
      marginOutput.textContent = "$" + margin;
      positionSizeForProfitOutput.textContent = "$" + positionSize;
    }

    totalDepositInput.addEventListener("input", calculate);
    riskPercentageInput.addEventListener("input", calculate);
    stopLossPercentageInput.addEventListener("input", calculate);
    takeProfitPercentageInput.addEventListener("input", calculate);
    leverageInput.addEventListener("input", calculate);

    calculate(); // Initial calculation