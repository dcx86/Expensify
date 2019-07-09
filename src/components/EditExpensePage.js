import React from 'react'

const EditExpensePage = (params) => (
  <div>
    This is from Edit Expense Page with id {params.match.params.id}
  </div>
);

export default EditExpensePage;