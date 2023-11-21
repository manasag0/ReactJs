


function InputBox({
    label,
    amount,
    onAmountChange,
    onCorrencyChange,
    currencyOptions =[],
    selectedCurrency ='usd',
    amoundDisabled = false,
    currencyDisabled = false,
    className=""
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1-2">
        <label className="text-black/40 mb-2 inline-block" >
        {label}
        </label>
            <input 
            type="number" 
            className="outline-none w-full bg-transparent py-1.5"
            placeholder="Amount"
            value={amount}
            disabled={amoundDisabled}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}  />

      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p>Currency Type</p>
      </div>
    </div>
  )
}

export default InputBox
