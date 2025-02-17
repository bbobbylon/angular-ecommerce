package com.ecommerceapp.spring_boot_ecommerce.dao;

import com.ecommerceapp.spring_boot_ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

//extends the JPA Repository along with the <Entity and Primary Key>
//productCategory is the name of the JSON Entry and the path = /product-category
@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
