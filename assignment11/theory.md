**Que. What is prop drilling?**
Ans. Prop drilling is a situation where data is passed from one component through multiple interdependent components until you get to the component where the data is needed.


**Que. What is the Lifting the state up?**
Ans. In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”.


**Que. What is Context Provider and Context Consumer?**

Ans. The provider is used to create a context that can be consumed. The consumer is used to consume the nearest provided context. Note that you can provide the same context many times through your application, and you can even provide the same context nested.

It is the relationship between Provider parent and Consumer descendants that allows to share values between them.
All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.

**Que. If you don't pass a value to the provider does it take the default value?**

Ans. When there's no Provider, the defaultValue argument is used for the function createContext.