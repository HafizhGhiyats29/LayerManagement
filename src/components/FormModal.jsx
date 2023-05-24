import React from 'react';

function FormModal({
  formHeaderText,
  children,
  formStyle,
  onUpdateHandler,
  // uploadedFile,
  mapId,
  selectFileTypeValue,
  fileNameInput,
}) {
  return (
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl w-[25%] py-8 px-10 ${formStyle}`}>
      <h1 className="font-bold text-xl mb-7">{formHeaderText}</h1>
      <form
        encType="multipart/form-data"
        onSubmit={(e) => onUpdateHandler(e, {
          id: mapId,
          newData: {
            fileSource: `${fileNameInput}${selectFileTypeValue}`,
            map: fileNameInput,
          },
        })}
      >
        {children}
      </form>
    </div>
  );
}

export default FormModal;
