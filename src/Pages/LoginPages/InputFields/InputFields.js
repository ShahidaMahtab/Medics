import React from "react";

const InputFields = (props) => {
  const { id, handler, inputType, inputPlaceholder } = props.input;
  return (
    <section>
      <div key={id} className="mx-auto text-center mb-3">
        <label className="block text-center">
          <input
            ref={handler}
            type={inputType}
            required
            className="mx-auto mt-1 block w-1/2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
            placeholder={inputPlaceholder}
          />
        </label>
      </div>
    </section>
  );
};

export default InputFields;
