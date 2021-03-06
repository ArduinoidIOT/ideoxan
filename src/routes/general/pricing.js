/* ---------------------------------------------------------------------------------------------- */
/*                                            REQUIRES                                            */
/* ---------------------------------------------------------------------------------------------- */
/* -------------------------------------------- Util -------------------------------------------- */
const {renderCustomPage} = require('../../utils/pages')

/* ---------------------------------------------------------------------------------------------- */
/*                                              ROUTE                                             */
/* ---------------------------------------------------------------------------------------------- */
module.exports = async (req, res) => {
    renderCustomPage(req, res, 'pricing')                       // Renders pricing page
}