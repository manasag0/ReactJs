


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
    <div className={` bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1-2">
        <label className="text-black/40 mb-2 inline-block" >
            <input 
            type="number" 
            className="outline-none w-full"
            value={amount}
            disabled={amoundDisabled} />
            {label}
        </label>
      </div>
    </div>
  )
}

export default InputBox
