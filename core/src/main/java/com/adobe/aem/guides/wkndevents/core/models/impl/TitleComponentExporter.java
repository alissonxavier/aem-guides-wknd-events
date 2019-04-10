package com.adobe.aem.guides.wkndevents.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.Optional;
 

import javax.annotation.Nonnull;

@Model(
        adaptables = { SlingHttpServletRequest.class },
        adapters = { TitleComponentExporter.class, ComponentExporter.class },
        resourceType = TitleComponentExporter.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
          selector = ExporterConstants.SLING_MODEL_SELECTOR, // The default is 'model', this is just reiterating this.
          extensions = ExporterConstants.SLING_MODEL_EXTENSION,
          options = {   @ExporterOption(name = "MapperFeature.SORT_PROPERTIES_ALPHABETICALLY", value = "true"),
                        @ExporterOption(name = "SerializationFeature.WRITE_DATES_AS_TIMESTAMPS", value="false")
          }
)
@JsonSerialize(as = TitleComponentExporter.class)

public class TitleComponentExporter implements ComponentExporter {

    protected static final String RESOURCE_TYPE = "wknd-events/components/content/title";

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String type;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String font;

    @Self
    private SlingHttpServletRequest request;

    @Self
    private Resource resource;

    // Injection will occur over all Injectors based on Ranking;
    // Force an Injector using @Source(..)
    // If an Injector is not working; ensure you are using the latest version of Sling Models
    @SlingObject
    @Required
    private ResourceResolver resourceResolver;

    @Nonnull
    @Override
    public String getExportedType() {
        // This method is required by ComponentExporter and its value populates the `:type` key in the JSON object.
        // The resource value is ~always the ResourceType for this model (See @Model(..) above).
        return request.getResource().getResourceType();
    }

    public String getTitle() {
        return title;
    }
    
    public String getType() {
        return this.type;
    }

    public String getFont() {
        return this.font;
    }
}