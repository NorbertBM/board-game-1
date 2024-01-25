export function Print(selection, elementStyle) {
  const printContents = document.querySelector(`.${selection}`);
  if (printContents) {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(printContents.innerHTML);

    printWindow.document.write(
      `<style>
           ${elementStyle}
            @media print {
              .print-btn {
                display: none;
              }
            }
            </style>`
    );
    printWindow.document.close();
    printWindow.print();
  }
}
