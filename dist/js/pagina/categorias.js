"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var modelo_js_1 = require("../modelo.js");
function createContent(categorias) {
    var html = '';
    categorias.forEach(function (item) {
        html += "\n                <tr>\n                    <td>".concat(item.nome, "</td>\n                    <td>").concat(item.status, "</td>\n                    <td>").concat(item.criacao, "</td>\n                    <td>\n                        <button class=\"btn border border-1\" id=\"delete-btn-").concat(item.id, "\">\n                            <svg width=\"20px\" height=\"20px\" viewBox=\"0 0 24.00 24.00\" fill=\"none\" stroke=\"#ff0000\" transform=\"rotate(0)matrix(1, 0, 0, 1, 0, 0)\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <path d=\"M10 12V17\" stroke=\"#ff0000\" stroke-width=\"1.8640000000000001\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M14 12V17\" stroke=\"#ff0000\" stroke-width=\"1.8640000000000001\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M4 7H20\" stroke=\"#ff0000\" stroke-width=\"0.8640000000000001\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10\" stroke=\"#ff0000\" stroke-width=\"0.8640000000000001\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z\" stroke=\"#ff0000\" stroke-width=\"0.8640000000000001\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g></svg>\n                        </button>\n                    </td>\n                </tr>");
    });
    document.querySelector('tbody').innerHTML = html;
}
(function listarCategorias() {
    return __awaiter(this, void 0, void 0, function () {
        var categorias, categoriasNoCache, response, newCategorias, deletarItem_1, err_1, msg;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    categorias = void 0;
                    categoriasNoCache = localStorage.getItem('cache-categorias');
                    if (categoriasNoCache) {
                        categorias = JSON.parse(categoriasNoCache);
                        return [2, createContent(categorias)];
                    }
                    return [4, fetch('http://localhost:3000/categorias')];
                case 1:
                    response = _a.sent();
                    return [4, response.json()];
                case 2:
                    newCategorias = _a.sent();
                    localStorage.setItem('cache-categorias', JSON.stringify(newCategorias));
                    createContent(newCategorias);
                    deletarItem_1 = function (uuid) { return __awaiter(_this, void 0, void 0, function () {
                        var response_1, data, error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    return [4, fetch("http://localhost:3000/categorias/".concat(uuid), { method: 'DELETE' })];
                                case 1:
                                    response_1 = _a.sent();
                                    return [4, response_1.json()];
                                case 2:
                                    data = _a.sent();
                                    localStorage.removeItem('cache-categorias');
                                    return [2, data];
                                case 3:
                                    error_1 = _a.sent();
                                    console.error('Erro ao excluir o item: ', error_1);
                                    return [3, 4];
                                case 4: return [2];
                            }
                        });
                    }); };
                    document.querySelectorAll('button[id^="delete-btn-"]').forEach(function (btn) {
                        var id = btn.id.substring(11, 50);
                        btn.addEventListener('click', function () {
                            deletarItem_1(id);
                            alert('item deletado com sucesso! atualize a página.');
                        });
                    });
                    return [3, 4];
                case 3:
                    err_1 = _a.sent();
                    msg = 'Não foi possível recuperar as categorias.';
                    document.querySelector('.erro-listar-categorias').innerHTML = msg;
                    return [3, 4];
                case 4: return [2];
            }
        });
    });
})();
var campoNome = document.querySelector('#nome');
var form = document.querySelector('#formCategoria');
function formattedDataCurrent() {
    var date = new Date();
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    var year = date.getFullYear();
    var formattedData = "".concat(year, "-").concat(month, "-").concat(day);
    return formattedData;
}
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var nome = campoNome.value;
    var status = "ATIVO";
    var criacao = formattedDataCurrent();
    var novaCategoria = (0, modelo_js_1.criaCategoria)(nome, status, criacao);
    fetch('http://localhost:3000/categorias', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novaCategoria),
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        alert("Categoria ".concat(data.nome, " cadastrada com sucesso! Atualize a p\u00E1gina."));
        localStorage.removeItem('cache-categorias');
    })
        .catch(function (error) {
        console.error('Não foi possível salvar a categoria! Aguarde uns minutos e tente novamente.');
    });
    campoNome.value = '';
    campoNome.focus();
});
