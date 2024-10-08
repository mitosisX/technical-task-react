import {
  __awaiter,
  __generator,
  __spread
} from "./chunk-GTYDSB3V.js";
import {
  require_react
} from "./chunk-XRMR5KPY.js";
import {
  __toESM
} from "./chunk-WGAPYIUP.js";

// node_modules/use-file-picker/dist/_rollupPluginBabelHelpers-4e04b055.js
function _regeneratorRuntime() {
  _regeneratorRuntime = function() {
    return exports;
  };
  var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function(obj, key, desc) {
    obj[key] = desc.value;
  }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {
  }
  function GeneratorFunction() {
  }
  function GeneratorFunctionPrototype() {
  }
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function() {
    return this;
  });
  var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg, value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
          invoke("next", value2, resolve, reject);
        }, function(err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function(unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function(error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function(method, arg) {
      if ("executing" === state)
        throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method)
          throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg; ; ) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel)
              continue;
            return delegateResult;
          }
        }
        if ("next" === context.method)
          context.sent = context._sent = context.arg;
        else if ("throw" === context.method) {
          if ("suspendedStart" === state)
            throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else
          "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
            continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method, method = delegate.iterator[methodName];
    if (void 0 === method)
      return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type)
      return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod)
        return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next)
        return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1, next = function next2() {
          for (; ++i < iterable.length; )
            if (hasOwn.call(iterable, i))
              return next2.value = iterable[i], next2.done = false, next2;
          return next2.value = void 0, next2.done = true, next2;
        };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: void 0,
      done: true
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function(genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function(arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
    return this;
  }), define(Gp, "toString", function() {
    return "[object Generator]";
  }), exports.keys = function(val) {
    var object = Object(val), keys = [];
    for (var key in object)
      keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length; ) {
        var key2 = keys.pop();
        if (key2 in object)
          return next.value = key2, next.done = false, next;
      }
      return next.done = true, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
        for (var name in this)
          "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
    },
    stop: function() {
      this.done = true;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type)
        throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function(exception) {
      if (this.done)
        throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i], record = entry.completion;
        if ("root" === entry.tryLoc)
          return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc)
              return handle(entry.catchLoc, true);
            if (this.prev < entry.finallyLoc)
              return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc)
              return handle(entry.catchLoc, true);
          } else {
            if (!hasFinally)
              throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc)
              return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function(record, afterLoc) {
      if ("throw" === record.type)
        throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc)
          return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName,
        nextLoc
      }, "next" === this.method && (this.arg = void 0), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectDestructuringEmpty(obj) {
  if (obj == null)
    throw new TypeError("Cannot destructure " + obj);
}

// node_modules/use-file-picker/dist/index.esm.js
var import_react = __toESM(require_react());

// node_modules/file-selector/dist/es5/file.js
var COMMON_MIME_TYPES = /* @__PURE__ */ new Map([
  ["avi", "video/avi"],
  ["gif", "image/gif"],
  ["ico", "image/x-icon"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["mp4", "video/mp4"],
  ["pdf", "application/pdf"],
  ["png", "image/png"],
  ["zip", "application/zip"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
]);
function toFileWithPath(file, path) {
  var f = withMimeType(file);
  if (typeof f.path !== "string") {
    var webkitRelativePath = file.webkitRelativePath;
    Object.defineProperty(f, "path", {
      value: typeof path === "string" ? path : typeof webkitRelativePath === "string" && webkitRelativePath.length > 0 ? webkitRelativePath : file.name,
      writable: false,
      configurable: false,
      enumerable: true
    });
  }
  return f;
}
function withMimeType(file) {
  var name = file.name;
  var hasExtension = name && name.lastIndexOf(".") !== -1;
  if (hasExtension && !file.type) {
    var ext = name.split(".").pop().toLowerCase();
    var type = COMMON_MIME_TYPES.get(ext);
    if (type) {
      Object.defineProperty(file, "type", {
        value: type,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
  }
  return file;
}

// node_modules/file-selector/dist/es5/file-selector.js
var FILES_TO_IGNORE = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function fromEvent(evt) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, isDragEvt(evt) && evt.dataTransfer ? getDataTransferFiles(evt.dataTransfer, evt.type) : getInputFiles(evt)];
    });
  });
}
function isDragEvt(value) {
  return !!value.dataTransfer;
}
function getInputFiles(evt) {
  var files = isInput(evt.target) ? evt.target.files ? fromList(evt.target.files) : [] : [];
  return files.map(function(file) {
    return toFileWithPath(file);
  });
}
function isInput(value) {
  return value !== null;
}
function getDataTransferFiles(dt, type) {
  return __awaiter(this, void 0, void 0, function() {
    var items, files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (!dt.items)
            return [3, 2];
          items = fromList(dt.items).filter(function(item) {
            return item.kind === "file";
          });
          if (type !== "drop") {
            return [2, items];
          }
          return [4, Promise.all(items.map(toFilePromises))];
        case 1:
          files = _a.sent();
          return [2, noIgnoredFiles(flatten(files))];
        case 2:
          return [2, noIgnoredFiles(fromList(dt.files).map(function(file) {
            return toFileWithPath(file);
          }))];
      }
    });
  });
}
function noIgnoredFiles(files) {
  return files.filter(function(file) {
    return FILES_TO_IGNORE.indexOf(file.name) === -1;
  });
}
function fromList(items) {
  var files = [];
  for (var i = 0; i < items.length; i++) {
    var file = items[i];
    files.push(file);
  }
  return files;
}
function toFilePromises(item) {
  if (typeof item.webkitGetAsEntry !== "function") {
    return fromDataTransferItem(item);
  }
  var entry = item.webkitGetAsEntry();
  if (entry && entry.isDirectory) {
    return fromDirEntry(entry);
  }
  return fromDataTransferItem(item);
}
function flatten(items) {
  return items.reduce(function(acc, files) {
    return __spread(acc, Array.isArray(files) ? flatten(files) : [files]);
  }, []);
}
function fromDataTransferItem(item) {
  var file = item.getAsFile();
  if (!file) {
    return Promise.reject(item + " is not a File");
  }
  var fwp = toFileWithPath(file);
  return Promise.resolve(fwp);
}
function fromEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
    });
  });
}
function fromDirEntry(entry) {
  var reader = entry.createReader();
  return new Promise(function(resolve, reject) {
    var entries = [];
    function readEntries() {
      var _this = this;
      reader.readEntries(function(batch) {
        return __awaiter(_this, void 0, void 0, function() {
          var files, err_1, items;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!!batch.length)
                  return [3, 5];
                _a.label = 1;
              case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, Promise.all(entries)];
              case 2:
                files = _a.sent();
                resolve(files);
                return [3, 4];
              case 3:
                err_1 = _a.sent();
                reject(err_1);
                return [3, 4];
              case 4:
                return [3, 6];
              case 5:
                items = Promise.all(batch.map(fromEntry));
                entries.push(items);
                readEntries();
                _a.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(err) {
        reject(err);
      });
    }
    readEntries();
  });
}
function fromFileEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, new Promise(function(resolve, reject) {
        entry.file(function(file) {
          var fwp = toFileWithPath(file, entry.fullPath);
          resolve(fwp);
        }, function(err) {
          reject(err);
        });
      })];
    });
  });
}

// node_modules/use-file-picker/dist/index.esm.js
function openFileDialog(accept, multiple, callback, initializeWithCustomAttributes) {
  var inputElement = document.createElement("input");
  inputElement.style.display = "none";
  document.body.appendChild(inputElement);
  inputElement.type = "file";
  if (accept !== "*")
    inputElement.accept = accept;
  inputElement.multiple = multiple;
  inputElement.addEventListener("change", function(arg) {
    callback(arg);
    document.body.removeChild(inputElement);
  });
  if (initializeWithCustomAttributes) {
    initializeWithCustomAttributes(inputElement);
  }
  inputElement.dispatchEvent(new MouseEvent("click"));
}
var useValidators = function useValidators2(_ref) {
  var onFilesSelectedProp = _ref.onFilesSelected, onFilesSuccessfullySelectedProp = _ref.onFilesSuccessfullySelected, onFilesRejectedProp = _ref.onFilesRejected, onClearProp = _ref.onClear, validators = _ref.validators;
  var onFilesSelected = function onFilesSelected2(data) {
    onFilesSelectedProp == null ? void 0 : onFilesSelectedProp(data);
    validators == null ? void 0 : validators.forEach(function(validator) {
      validator.onFilesSelected(data);
    });
  };
  var onFilesSuccessfullySelected = function onFilesSuccessfullySelected2(data) {
    onFilesSuccessfullySelectedProp == null ? void 0 : onFilesSuccessfullySelectedProp(data);
    validators == null ? void 0 : validators.forEach(function(validator) {
      validator.onFilesSuccessfullySelected(data);
    });
  };
  var onFilesRejected = function onFilesRejected2(errors) {
    onFilesRejectedProp == null ? void 0 : onFilesRejectedProp(errors);
    validators == null ? void 0 : validators.forEach(function(validator) {
      validator.onFilesRejected(errors);
    });
  };
  var onClear = function onClear2() {
    onClearProp == null ? void 0 : onClearProp();
    validators == null ? void 0 : validators.forEach(function(validator) {
      validator.onClear == null ? void 0 : validator.onClear();
    });
  };
  return {
    onFilesSelected,
    onFilesSuccessfullySelected,
    onFilesRejected,
    onClear
  };
};
function useFilePicker(props) {
  var _props$accept = props.accept, accept = _props$accept === void 0 ? "*" : _props$accept, _props$multiple = props.multiple, multiple = _props$multiple === void 0 ? true : _props$multiple, _props$readAs = props.readAs, readAs = _props$readAs === void 0 ? "Text" : _props$readAs, _props$readFilesConte = props.readFilesContent, readFilesContent = _props$readFilesConte === void 0 ? true : _props$readFilesConte, _props$validators = props.validators, validators = _props$validators === void 0 ? [] : _props$validators, initializeWithCustomParameters = props.initializeWithCustomParameters;
  var _useState = (0, import_react.useState)([]), plainFiles = _useState[0], setPlainFiles = _useState[1];
  var _useState2 = (0, import_react.useState)([]), filesContent = _useState2[0], setFilesContent = _useState2[1];
  var _useState3 = (0, import_react.useState)([]), fileErrors = _useState3[0], setFileErrors = _useState3[1];
  var _useState4 = (0, import_react.useState)(false), loading = _useState4[0], setLoading = _useState4[1];
  var _useValidators = useValidators(props), onFilesSelected = _useValidators.onFilesSelected, onFilesSuccessfullySelected = _useValidators.onFilesSuccessfullySelected, onFilesRejected = _useValidators.onFilesRejected, onClear = _useValidators.onClear;
  var clear = (0, import_react.useCallback)(function() {
    setPlainFiles([]);
    setFilesContent([]);
    setFileErrors([]);
  }, []);
  var clearWithEventListener = (0, import_react.useCallback)(function() {
    clear();
    onClear == null ? void 0 : onClear();
  }, [clear, onClear]);
  var parseFile = function parseFile2(file) {
    return new Promise(function() {
      var _ref = _asyncToGenerator(_regeneratorRuntime().mark(function _callee2(resolve, reject) {
        var reader, readStrategy, addError;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1)
            switch (_context2.prev = _context2.next) {
              case 0:
                reader = new FileReader();
                readStrategy = reader["readAs" + readAs];
                readStrategy.call(reader, file);
                addError = function addError2(_ref2) {
                  var others = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
                  reject(_extends({}, others));
                };
                reader.onload = _asyncToGenerator(_regeneratorRuntime().mark(function _callee() {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1)
                      switch (_context.prev = _context.next) {
                        case 0:
                          return _context.abrupt("return", Promise.all(validators.map(function(validator) {
                            return validator.validateAfterParsing(props, file, reader)["catch"](function(err) {
                              return Promise.reject(addError(err));
                            });
                          })).then(function() {
                            return resolve(_extends({}, file, {
                              content: reader.result,
                              name: file.name,
                              lastModified: file.lastModified
                            }));
                          })["catch"](function() {
                          }));
                        case 1:
                        case "end":
                          return _context.stop();
                      }
                  }, _callee);
                }));
                reader.onerror = function() {
                  addError({
                    name: "FileReaderError",
                    readerError: reader.error,
                    causedByFile: file
                  });
                };
              case 6:
              case "end":
                return _context2.stop();
            }
        }, _callee2);
      }));
      return function(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  };
  var openFilePicker = function openFilePicker2() {
    var fileExtensions = accept instanceof Array ? accept.join(",") : accept;
    openFileDialog(fileExtensions, multiple, function() {
      var _ref4 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee3(evt) {
        var inputElement, plainFileObjects, validationsBeforeParsing, files, validationsAfterParsing, filesContent2;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1)
            switch (_context3.prev = _context3.next) {
              case 0:
                clear();
                inputElement = evt.target;
                plainFileObjects = inputElement.files ? Array.from(inputElement.files) : [];
                setLoading(true);
                _context3.next = 6;
                return Promise.all(validators.map(function(validator) {
                  return validator.validateBeforeParsing(props, plainFileObjects)["catch"](function(err) {
                    return Array.isArray(err) ? err : [err];
                  });
                }));
              case 6:
                validationsBeforeParsing = _context3.sent.flat(1).filter(Boolean);
                setPlainFiles(plainFileObjects);
                setFileErrors(validationsBeforeParsing);
                if (!validationsBeforeParsing.length) {
                  _context3.next = 15;
                  break;
                }
                setLoading(false);
                setPlainFiles([]);
                onFilesRejected == null ? void 0 : onFilesRejected({
                  errors: validationsBeforeParsing
                });
                onFilesSelected == null ? void 0 : onFilesSelected({
                  errors: validationsBeforeParsing
                });
                return _context3.abrupt("return");
              case 15:
                if (readFilesContent) {
                  _context3.next = 19;
                  break;
                }
                setLoading(false);
                onFilesSelected == null ? void 0 : onFilesSelected({
                  plainFiles: plainFileObjects,
                  filesContent: []
                });
                return _context3.abrupt("return");
              case 19:
                _context3.next = 21;
                return fromEvent(evt);
              case 21:
                files = _context3.sent;
                validationsAfterParsing = [];
                _context3.next = 25;
                return Promise.all(files.map(function(file) {
                  return parseFile(file)["catch"](function(fileError) {
                    validationsAfterParsing.push.apply(validationsAfterParsing, Array.isArray(fileError) ? fileError : [fileError]);
                  });
                }));
              case 25:
                filesContent2 = _context3.sent;
                setLoading(false);
                if (!validationsAfterParsing.length) {
                  _context3.next = 34;
                  break;
                }
                setPlainFiles([]);
                setFilesContent([]);
                setFileErrors(function(errors) {
                  return [].concat(errors, validationsAfterParsing);
                });
                onFilesRejected == null ? void 0 : onFilesRejected({
                  errors: validationsAfterParsing
                });
                onFilesSelected == null ? void 0 : onFilesSelected({
                  errors: validationsBeforeParsing.concat(validationsAfterParsing)
                });
                return _context3.abrupt("return");
              case 34:
                setFilesContent(filesContent2);
                setPlainFiles(plainFileObjects);
                setFileErrors([]);
                onFilesSuccessfullySelected == null ? void 0 : onFilesSuccessfullySelected({
                  filesContent: filesContent2,
                  plainFiles: plainFileObjects
                });
                onFilesSelected == null ? void 0 : onFilesSelected({
                  plainFiles: plainFileObjects,
                  filesContent: filesContent2
                });
              case 39:
              case "end":
                return _context3.stop();
            }
        }, _callee3);
      }));
      return function(_x3) {
        return _ref4.apply(this, arguments);
      };
    }(), initializeWithCustomParameters);
  };
  return {
    openFilePicker,
    filesContent,
    errors: fileErrors,
    loading,
    plainFiles,
    clear: clearWithEventListener
  };
}
function useImperativeFilePicker(props) {
  var _onFilesSelected = props.onFilesSelected, _onFilesSuccessfullySelected = props.onFilesSuccessfullySelected, validators = props.validators, onFileRemoved = props.onFileRemoved;
  var _useState = (0, import_react.useState)([]), allPlainFiles = _useState[0], setAllPlainFiles = _useState[1];
  var _useState2 = (0, import_react.useState)([]), allFilesContent = _useState2[0], setAllFilesContent = _useState2[1];
  var _useFilePicker = useFilePicker(_extends({}, props, {
    onFilesSelected: function onFilesSelected(data) {
      var _data$errors;
      if (!_onFilesSelected)
        return;
      if ((_data$errors = data.errors) != null && _data$errors.length) {
        return _onFilesSelected(data);
      }
      _onFilesSelected({
        errors: void 0,
        plainFiles: [].concat(allPlainFiles, data.plainFiles || []),
        filesContent: [].concat(allFilesContent, data.filesContent || [])
      });
    },
    onFilesSuccessfullySelected: function onFilesSuccessfullySelected(data) {
      setAllPlainFiles(function(previousPlainFiles) {
        return previousPlainFiles.concat(data.plainFiles);
      });
      setAllFilesContent(function(previousFilesContent) {
        return previousFilesContent.concat(data.filesContent);
      });
      if (!_onFilesSuccessfullySelected)
        return;
      _onFilesSuccessfullySelected({
        plainFiles: [].concat(allPlainFiles, data.plainFiles || []),
        filesContent: [].concat(allFilesContent, data.filesContent || [])
      });
    }
  })), openFilePicker = _useFilePicker.openFilePicker, loading = _useFilePicker.loading, errors = _useFilePicker.errors, clear = _useFilePicker.clear;
  var clearAll = (0, import_react.useCallback)(function() {
    clear();
    setAllPlainFiles([]);
    setAllFilesContent([]);
  }, [clear]);
  var removeFileByIndex = (0, import_react.useCallback)(function(index) {
    setAllFilesContent(function(previousFilesContent) {
      return [].concat(previousFilesContent.slice(0, index), previousFilesContent.slice(index + 1));
    });
    setAllPlainFiles(function(previousPlainFiles) {
      var removedFile = previousPlainFiles[index];
      validators == null ? void 0 : validators.forEach(function(validator) {
        return validator.onFileRemoved == null ? void 0 : validator.onFileRemoved(removedFile, index);
      });
      onFileRemoved == null ? void 0 : onFileRemoved(removedFile, index);
      return [].concat(previousPlainFiles.slice(0, index), previousPlainFiles.slice(index + 1));
    });
  }, [validators, onFileRemoved]);
  var removeFileByReference = (0, import_react.useCallback)(function(file) {
    var index = allPlainFiles.findIndex(function(f) {
      return f === file;
    });
    if (index === -1)
      return;
    removeFileByIndex(index);
  }, [removeFileByIndex, allPlainFiles]);
  return {
    openFilePicker,
    plainFiles: allPlainFiles,
    filesContent: allFilesContent,
    loading,
    errors,
    clear: clearAll,
    removeFileByIndex,
    removeFileByReference
  };
}
export {
  useFilePicker,
  useImperativeFilePicker
};
//# sourceMappingURL=use-file-picker.js.map
